import { defineConfig } from 'umi';
import preConfig from './config.pre';

// const publicPath = 'https://dtfbu23yspx4p.cloudfront.net/';

export default defineConfig({
    ...preConfig,
    // publicPath,
    // favicon: `${publicPath}favicon.svg`,
    favicon: '/favicon.svg',
});
