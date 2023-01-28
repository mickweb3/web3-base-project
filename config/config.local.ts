import './loadEnv';
import { defineConfig } from 'umi';

export default defineConfig({
    define: {
        'process.env.MOCK_TOKEN': process.env.MOCK_TOKEN,
        'process.env.MOCK_LABELS': process.env.MOCK_LABELS,
        'process.env.MOCK_AUTOLOAD_ADDRESS': process.env.MOCK_AUTOLOAD_ADDRESS,
        'process.env.MOCK_PREVIEW_LABELS': process.env.MOCK_PREVIEW_LABELS,
        'process.env.MOCK_SEARCHING_ADDRESS': process.env.MOCK_SEARCHING_ADDRESS,
        'process.env.HASURA_API': '/api/hasura-cache/v1/graphql',
        'process.env.HASURA_ADMIN_SECRET': 'zEwFUCTQ2aJ9VdmK',
        'process.env.CHAT_URL': 'http://localhost:8001',
        'process.env.RPC_NODE_1': 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        'process.env.RPC_NODE_2': 'https://data-seed-prebsc-2-s1.binance.org:8545/',
        'process.env.RPC_NODE_3': 'https://data-seed-prebsc-1-s2.binance.org:8545/',
        'process.env.CUSTOM_CHAINS': 'dev',
        'process.env.EKS': '',
    },
    fastRefresh: {},
    proxy: {
        '/api/hasura-cache/v1/graphql': {
            target: 'https://api.wired.network',
            changeOrigin: true,
            secure: false,
        },
        '/api/ugc-gateway': {
            target: 'https://api.wired.network',
            changeOrigin: true,
            secure: false,
        },
    },
    favicon: `/favicon.svg`,
});
