import { useLayoutEffect, useState } from 'react';

export const useScrollPosition = () => {
    const [scroll, setScroll] = useState([0]);
    useLayoutEffect(() => {
        function updateScroll() {
            setScroll([window.pageYOffset]);
        }

        window.addEventListener('scroll', updateScroll);
        updateScroll();
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);
    return scroll;
};

