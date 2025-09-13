import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
    //const location = useLocation();
    //const lastHash = useRef('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const topicId = params.get("topic");
        const hash = location.hash; // e.g. "#one"

        if (!topicId) return;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const header = document.querySelector("Header");
                const headerHeight = header ? header.offsetHeight : 0;

                if (hash) {
                    // Scroll to the anchor target
                    const target = document.querySelector(hash);
                    if (target) {
                        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                        window.scrollTo({ top: y, behavior: "smooth" });
                        return;
                    }
                }

                // Fallback: scroll to the top of content
                const el = contentRef.current;
                if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            });
        });
    }, [location.search, location.hash]);

    return null;
}

export default ScrollToAnchor;