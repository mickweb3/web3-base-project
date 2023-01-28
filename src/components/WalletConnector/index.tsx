import './index.less';
import './mobile.less';

import { FC, useEffect, useMemo, useState } from 'react';
import { useEagerConnect, useWeb3React } from 'web3-connector';
import WalletModal from './WalletList';
import FoxWallet from '@/assets/images/dapp/fox-wallet.png';
import { AntButton } from '..';
import classNames from 'classnames';
import { fail } from '../WiredNotificationApi';
import { debounce } from 'lodash';
import { useModel } from 'umi';
import { WiredFlexBox, WiredImage, WiredText } from '../base';
import { IWiredProps } from '@/components-typing';
import { eventBus } from '@/utils/eventBus';
import { EventKey } from '@/config/constant';

export const connectedKey = 'connected';

const wrappedFail = debounce((message) => fail({ message }), 1000);

const WalletConnector: FC<IWiredProps<HTMLDivElement> & FlexCss> = (props) => {
    const { ...rest } = props;
    const { error = {} as any } = useEagerConnect();
    const { matched } = useModel('@@chain');

    if (error.code === -32002) {
        wrappedFail(error?.message);
    }

    const [visible, setVisible] = useState(false);
    const { account } = useWeb3React();

    const handleConnect = () => {
        setVisible(true);
    };

    const handleLogout = () => {
        setVisible(true);
    };

    const addressDisplay = useMemo(() => {
        if (account) {
            return account.substr(0, 5) + '...' + account.substr(-5);
        }
    }, [account]);

    useEffect(() => {
        eventBus.$on(EventKey.UNCONNECTED, () => setVisible(true));
        return () => {
            eventBus.$off(EventKey.UNCONNECTED);
        };
    }, []);

    return (
        <WiredFlexBox {...(rest as any)}>
            <WalletModal visible={visible} onClose={() => setVisible(false)} />
            {!matched && (
                <AntButton
                    disabled
                    width={168}
                    height={38}
                    fontSize={16}
                    wiredtheme="pure"
                    background="rgba(249, 204, 207, 0.44)"
                >
                    <WiredImage src={require('./assets/network-error.svg')} width={25} marginRight={8} />
                    <WiredText color="#CB2434" fontSize={15} fontWeight={700}>
                        Wrong Network
                    </WiredText>
                </AntButton>
            )}
            {matched && !account && (
                <AntButton
                    onClick={account ? handleLogout : handleConnect}
                    width={168}
                    height={38}
                    fontSize={15}
                    fontWeight={700}
                    color="#626264"
                    wiredtheme="pure"
                    className={classNames({ 'btn-connected': !!account })}
                >
                    {account && <img src={FoxWallet} />}
                    {account ? addressDisplay : 'Connect Wallet'}
                </AntButton>
            )}
        </WiredFlexBox>
    );
};

WalletConnector.displayName = WalletConnector.name;

export default WalletConnector;
