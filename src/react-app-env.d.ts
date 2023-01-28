import { Theme } from './config/theme';

interface Window {
    ethereum?: {
        isMetaMask?: true;
        request?: (...args: any[]) => Promise<void>;
        on?: (...args: any[]) => void;
    };
    BinanceChain?: {
        bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>;
    };
}

interface EventTarget {
    aborted?: boolean;
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
