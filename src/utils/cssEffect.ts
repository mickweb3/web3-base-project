export const addFadeEffect = (selector: string, direct?: string) => {
    const elm = document.querySelector<HTMLElement>(selector);
    if (!elm) return;
    elm.parentElement.style.opacity = '0';
    if (elm) {
        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.intersectionRatio >= 1) {
                    elm.parentElement.classList.add('fade');
                    elm.parentElement.classList.add(direct || 'top');
                }
            },
            { threshold: [1] },
        );

        observer.observe(elm);
    }
};
