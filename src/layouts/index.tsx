import './index.less';
import './mobile.less';

import { IRouteComponentProps } from 'umi';
import Header from './Header';
import Footer from './Footer';
import { WiredLayout } from '@/components';

export default function Layout({ children }: IRouteComponentProps) {
    return (
        <WiredLayout id="content">
            <Header />
            {children}
            <Footer />
        </WiredLayout>
    );
}
