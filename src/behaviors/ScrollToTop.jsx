import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Temporarily disable smooth scrolling
        const html = document.documentElement;
        const originalStyle = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });

        // Restore smooth scrolling after a brief delay
        const timer = setTimeout(() => {
            html.style.scrollBehavior = 'smooth';
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}

export default ScrollToTop;