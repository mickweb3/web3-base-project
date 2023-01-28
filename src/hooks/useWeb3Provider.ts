import { useEffect, useState, useRef } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from 'web3-connector';
import { simpleRpcProvider } from '@/utils/providers';
import { useModel } from 'umi';

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useWeb3Provider = (): {
    provider: ethers.providers.JsonRpcProvider | ethers.providers.Web3Provider;
} => {
    const { library } = useWeb3React();
    const refEth = useRef(library);
    const [provider, setprovider] = useState(library || simpleRpcProvider);

    const { account } = useWeb3React();

    useEffect(() => {
        if (library !== refEth.current && account) {
            setprovider(library || simpleRpcProvider);
            refEth.current = library;
        }
    }, [library, account]);

    return { provider };
};

export default useWeb3Provider;
