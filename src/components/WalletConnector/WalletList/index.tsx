import './index.less';
import './mobile.less';

import { ethers } from 'ethers';
import { useWeb3React, useWallet } from 'web3-connector';
import { useModel } from 'umi';
import { AntButton, AntModal, WiredAvatar, WiredLink } from '@/components';
import { CopyBtn } from '@/components/svg';
import useWeb3Provider from '@/hooks/useWeb3Provider';
import { useCallback, useEffect } from 'react';
import { login } from '@/api';
import { CacheKey, EventKey } from '@/config/constant';
import { eventBus } from '@/utils/eventBus';
import { fallbackCopyTextToClipboard } from '@/utils';
import { WiredBox, WiredFlexBox, WiredText } from '@/components/base';

interface IWalletModalProps {
    visible: boolean;
    onClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    handleChatLogin?: () => Promise<void>;
}

type WalletModal = 'yes' | 'no';
let _handling = false;

const WalletModal = (props: IWalletModalProps) => {
    const { onClose, visible } = props;
    const { account } = useWeb3React();
    const { chain, signal } = useModel('@@chain');
    const { connect, disconnect, connectors } = useWallet(chain);
    const { provider } = useWeb3Provider();

    const handleLogin = useCallback(async () => {
        if (!readyState || _handling || signal) return;
        try {
            _handling = true;
            const value = {
                address: account,
                nonce: Buffer.from(ethers.utils.randomBytes(16)).toString('base64'),
                timestamp: Math.floor(Date.now() / 1000),
            };
            const rawSignature = await provider.getSigner().signMessage(String(value.timestamp));
            // envoke login api
            const { result } = await login(account, 'wired-ugc', rawSignature, value.timestamp);
            if (result?.token) {
                localStorage.setItem(CacheKey.RELATION_TOKEN, result?.token);
                localStorage.setItem(CacheKey.METAMASK_WALLET, account);
                // success({ message: 'Authorization succeeded', duration: 1.2 });
                // setTimeout(() => window.location.reload(), 1700);
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        } finally {
            _handling = false;
        }
    }, [readyState, account, provider, signal]);

    useEffect(() => {
        // add to event bus
        eventBus.$on(EventKey.UNAUTHORIZED, handleLogin);

        if (signal) {
            window.location.reload();
            return;
        }

        // disconnect perhaps
        if (!account) {
            setSigned(false);
            return;
        } else {
            setAccount(account);
        }

        // switch account
        if (localStorage.getItem(CacheKey.METAMASK_WALLET) !== account) {
            setSigned(false);
            handleLogin();
            return;
        }

        // has authed
        if (localStorage.getItem(CacheKey.RELATION_TOKEN)) {
            setSigned(true);
            return;
        }

        handleLogin();

        return () => {
            eventBus.$off(EventKey.UNAUTHORIZED);
        };
    }, [handleLogin, signal]);

    return (
        <AntModal
            footer={null}
            title={account ? 'Account' : 'Connect Wallet'}
            onCancel={onClose}
            visible={visible}
            width={account ? 552 : 448}
            zIndexRoot={50}
        >
            <WiredBox className="wallet-list">
                {account && (
                    <WiredFlexBox column justify="center" align="center">
                        <WiredBox className="wallet-list-address">
                            <WiredText color="#182135" fontSize={16} fontWeight={400} marginLeft={4}>
                                {account}
                            </WiredText>
                            <WiredLink marginLeft={4} onClick={() => fallbackCopyTextToClipboard(account)}>
                                <CopyBtn />
                            </WiredLink>
                        </WiredBox>
                        <AntButton
                            $marginTop={32}
                            onClick={(e) => {
                                onClose(e);
                                disconnect();
                            }}
                            height={44}
                            fontSize={16}
                        >
                            Disconnect
                        </AntButton>
                    </WiredFlexBox>
                )}
                {!account && (
                    <WiredFlexBox column align="center">
                        {connectors.map((walletConfig) => {
                            // WalletCard
                            const { title, icon: WalletIcon } = walletConfig;

                            return (
                                <AntButton
                                    key={title}
                                    onClick={(e) => {
                                        onClose(e);
                                        connect(walletConfig);
                                    }}
                                    id={`wallet-connect-${title.toLocaleLowerCase()}`}
                                    width={364}
                                    height={60}
                                    className="wallet-list-connect-btn"
                                    wiredtheme="pure"
                                >
                                    <WiredFlexBox align="center" justify="center">
                                        <WiredFlexBox width={28}>
                                            <WalletIcon />
                                        </WiredFlexBox>
                                        <WiredText marginLeft={10} fontSize={16} fontWeight={500} color="#292725">
                                            {title}
                                        </WiredText>
                                    </WiredFlexBox>
                                </AntButton>
                            );
                        })}
                    </WiredFlexBox>
                )}
            </WiredBox>
        </AntModal>
    );
};

export default WalletModal;
