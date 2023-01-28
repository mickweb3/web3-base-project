import { PROJECT } from './constant';

const routes = [
    {
        exact: false,
        path: '/',
        component: '@/layouts/index',
        routes: [
            {
                exact: true,
                name: 'Home',
                path: '/',
                component: '@/pages/home',
            },
        ],
    },
];

export default routes;
