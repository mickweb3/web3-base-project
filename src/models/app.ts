import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';
import { useLocation } from 'umi';

const useAppModel = () => {
    let isDapp = false;
    const [isMobile, setIsMobile] = useState(false);
    try {
        const location = useLocation();

        isDapp = useMemo(() => location.pathname.startsWith('/dapp'), [location]);

        const getWindowScreen = throttle(() => {
            const isMobile =
                window.innerWidth <= +process.env.MOBILE_BOUNDARY || /mobile|ios|android/gi.test(navigator.userAgent);

            // chrome
            if (/chrome/gi.test(navigator.userAgent) && window.innerWidth > +process.env.MOBILE_BOUNDARY) {
                setIsMobile(false);
            } else {
                setIsMobile(isMobile);
            }
        }, 100);
        useEffect(() => {
            getWindowScreen();
            window.addEventListener('resize', getWindowScreen, false);
            return () => {
                window.removeEventListener('resize', getWindowScreen, false);
            };
        }, []);
    } catch (error) {
        // hide error log from umi bug
    }
    return { isMobile, isDapp };
};

export default useAppModel;
