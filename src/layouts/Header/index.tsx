import './index.less';
import './mobile.less';

import { useHistory, useLocation, useModel } from 'umi';
import useActivedStyle from '@/hooks/useActivedStyle';
import useAppModel from '@/models/app';
import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Select, Collapse, Skeleton } from 'antd';
import WalletConnector from '@/components/WalletConnector';
import classNames from 'classnames';
import {
    AntForm,
    AntFormItem,
    WiredBox,
    AntSelect,
    WiredFlexBox,
    WiredIcon,
    WiredImage,
    WiredLink,
    WiredNav,
    WiredNavLink,
    WiredSearchBar,
    WiredText,
    AntListItemMeta,
    WiredAccount,
    AntButton,
    WiredParagraph,
    AntDropdown,
    AntMenu,
} from '@/components';
import { useWeb3React, useWallet } from 'web3-connector';
import { eventBus } from '@/utils/eventBus';
import { fallbackCopyTextToClipboard, formatAddress } from '@/utils';
import { useTheme } from 'wired-styled-px2vw';
import { throttle } from 'lodash';
import useWeb3Provider from '@/hooks/useWeb3Provider';
import { EventKey } from '@/config/constant';

const { Panel } = Collapse;
const { Option } = Select;

export default () => {
    const { activeStyle } = useActivedStyle();
    const { chain, signal } = useModel('@@chain');
    const { connect, disconnect, connectors } = useWallet(chain);

    const [loading, setLoading] = useState(false);
    const [activeKey, setActiveKey] = useState([]);
    const [item, setItem] = useState(null);
    const [address, setAddress] = useState<string>(process.env.MOCK_SEARCHING_ADDRESS || null);
    const history = useHistory();
    const location = useLocation();
    const { account } = useWeb3React();
    const theme = useTheme();
    const header = useRef(null);
    const { provider } = useWeb3Provider();

    const handleLogout = () => {
        disconnect();
    };

    return (
        <Fragment>
            <header id="header">
                <WiredFlexBox className="header-innerbox" align="center">
                    <WiredLink onClick={() => history.push(Routers.HOME)} className="logo">
                        <WiredImage width={117} src={require('@/assets/images/logo.png')} />
                    </WiredLink>
                </WiredFlexBox>
            </header>
        </Fragment>
    );
};
