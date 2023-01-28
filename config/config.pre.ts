import { defineConfig } from 'umi';

const ZipPlugin = require('@dogedefi/zip-webpack-plugin');

export default defineConfig({
    define: {
        'process.env.HASURA_API': '/api/hasura-cache/v1/graphql',
        'process.env.HASURA_ADMIN_SECRET': 'zEwFUCTQ2aJ9VdmK',
        'process.env.CHAT_URL': 'https://testchat.relation.network',
        'process.env.RPC_NODE_1': 'https://bsc-dataseed.binance.org/',
        'process.env.RPC_NODE_2': 'https://bsc-dataseed1.defibit.io/',
        'process.env.RPC_NODE_3': 'https://bsc-dataseed1.ninicoin.io/',
        'process.env.CUSTOM_CHAINS': 'prod',
        'process.env.EKS': 'https://api.wired.network',
    },
    headScripts: [
        'https://unpkg.com/react@17/umd/react.production.min.js',
        'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js',
    ],
    externals: {
        react: 'window.React',
        'react-dom': 'window.ReactDOM',
        lodash: 'window._',
    },
    hash: true,
    chainWebpack(config, { webpack }) {
        config.plugin(ZipPlugin.name).use(
            new ZipPlugin({
                // OPTIONAL: defaults to the Webpack output path (above)
                // can be relative (to Webpack output path) or absolute
                path: '../',
                // initialFile: 'dist',

                // OPTIONAL: defaults to the Webpack output filename (above) or,
                // if not present, the basename of the path
                filename: 'dist.zip',
            }),
        );
    },
});
