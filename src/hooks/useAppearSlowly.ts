import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useAppearSlowly = (loop: boolean = false) => {
    const [words, setWords] = useState('');
    const [slowWords, setSlowWords] = useState('');
    const tmKeys = useRef([]);

    const interval = useMemo(() => 150, []);

    const appearSlowly = useCallback((words: string = '') => {
        const len = words.split('').length;
        for (let i = 0; i < len; i++) {
            const slicer = words.slice(0, i + 1) + (i + 1 === len ? '' : '|');
            // console.log(slicer);

            tmKeys.current.push(
                setTimeout(() => setSlowWords(slicer), i * interval),
            );
        }
    }, []);

    useEffect(() => {
        if (slowWords && slowWords === words && loop) {
            tmKeys.current.map((key) => clearTimeout(key));
            tmKeys.current = [];
            setTimeout(() => appearSlowly(words), 3000);
        }
    }, [slowWords, words, appearSlowly]);

    const clearTimers = useCallback(
        () => tmKeys.current.forEach((key) => clearTimeout(key)),
        [],
    );

    useEffect(() => {
        if (words) {
            appearSlowly(words);
        } else {
            clearTimers();
            setSlowWords('');
        }

        return () => {
            clearTimers();
            setSlowWords('');
        };
    }, [words]);

    return {
        setWords,
        slowWords,
    };
};

export default useAppearSlowly;
