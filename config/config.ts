import { defineConfig } from 'umi';
import routes from './routes';
import pxToViewPort from 'postcss-px-to-viewport';
import { MOBILE_BOUNDARY, PROJECT } from './constant';

export default defineConfig({
    define: {
        'process.env.PROJECT': PROJECT,
        'process.env.MOBILE_BOUNDARY': MOBILE_BOUNDARY,
        'process.env.EXPLORE_DEMO_LINK': '/dapp',
        'process.env.DOCS_LINK': 'https://relation-network.gitbook.io/api-docs-en/',
        // 'process.env.BLOG_LINK':
        //     'https://medium.com/@relationnetworklabs/what-should-the-social-networking-protocols-look-like-in-the-web3-era-5b7cff2ac745',
        'process.env.BLOG_LINK': 'https://wirednetwork.gitbook.io/api-docs-en/',
        'process.env.MEDIA_TWITTER': ' https://twitter.com/wiredprotocol',
        'process.env.MEDIA_MEDIUM': ' https://medium.com/@wiredprotocol',
        'process.env.MEDIA_DISCORD': ' https://discord.gg/BMcCn8g3TJ',
        'process.env.MEDIA_TELEGRAM': ' https://t.me/wirednetwork1',
    },
    title: 'Wired Network-Make Web3 Social+',
    plugins: [require.resolve('@dogedefi/plugin-multichain')],
    nodeModulesTransform: {
        type: 'none',
    },
    dynamicImport: {
        loading: '@/components/WiredLoading',
    },
    routes,
    mfsu: {
        development: {
            output: '.mfsu-development',
        },
    },
    fastRefresh: {},
    metas: [
        // refresh after 60s
        { httpEquiv: 'refresh', content: '600' },
    ],
    locale: {
        default: 'en-US',
        antd: false,
        title: false,
        baseNavigator: true,
        baseSeparator: '-',
    },
    links: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
            href: 'https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;600;700;800;900&display=swap',
            rel: 'stylesheet',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap',
            rel: 'stylesheet',
        },
    ],
    extraPostCSSPlugins: [
        pxToViewPort({
            viewportWidth: MOBILE_BOUNDARY,
            viewportUnit: 'vw',
            mediaQuery: true,
            include: /(.*)mobile.less/i,
            exclude: /node_modules|antd|(.*)index.less/i,
        }),
    ],
});
