import { debounce } from 'lodash';
import { useCallback, useRef } from 'react';

const useScrollLock = () => {
    const bodyRef = useRef<HTMLBodyElement>(document.querySelector('body'));

    const lock = useCallback(
        debounce(() => (bodyRef.current.style.overflow = 'hidden'), 500, { leading: true, trailing: false }),
        [],
    );

    const unlock = useCallback(() => (bodyRef.current.style.overflow = 'auto'), []);

    return { lock, unlock };
};

export default useScrollLock;
