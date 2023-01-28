import './index.less';
import './mobile.less';

import { history } from 'umi';
import useActivedStyle from '@/hooks/useActivedStyle';
import { Routers } from '@/config/constant';
import { WiredImage, WiredLink, WiredBox } from '@/components';
import useAppModel from '@/models/app';
import { Fragment } from 'react';

export default () => {
    const { activeStyle } = useActivedStyle();
    const { isDapp } = useAppModel();

    return (
        <Fragment>
            {!isDapp && <footer>Footer</footer>}
        </Fragment>
    );
};
