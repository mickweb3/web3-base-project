import './assets/styles/global.index.less';
import './assets/styles/global.mobile.less';

import 'react';
import { setLocale } from 'umi';
import enUS from 'antd/lib/locale/en_US';
import { ConfigProvider } from 'antd';
import { RefreshContextProvider } from '@/contexts/RefreshContext';
import { HelmetProvider } from 'react-helmet-async';
import { getLibrary, Web3ReactProvider } from 'web3-connector';
import { ThemeProvider } from 'wired-styled-px2vw';
import { theme } from './config/theme';
import { AntGlobalStyle } from './components';

setLocale('en-US', false);

export function rootContainer(container: any) {
    return (
        <ConfigProvider locale={enUS}>
            <AntGlobalStyle />
            <Web3ReactProvider getLibrary={getLibrary}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>
                        <RefreshContextProvider>{container}</RefreshContextProvider>
                    </HelmetProvider>
                </ThemeProvider>
            </Web3ReactProvider>
        </ConfigProvider>
    );
}
