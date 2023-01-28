import styles from './index.less';

import { FC, useEffect } from 'react';
import { WiredFlexBox, WiredImage } from '..';

const WiredLoading: FC = () => {
    return (
        <WiredFlexBox
            className={styles['wired-loading']}
            left="0"
            top="0"
            width="100vw"
            height="100vh"
            align="center"
            justify="center"
            background="#f0f0f0"
        >
            <WiredImage width="66.6%" src={''} />
        </WiredFlexBox>
    );
};

WiredLoading.displayName = WiredLoading.name;

export default WiredLoading;
