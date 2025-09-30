import { useEffect } from 'react';
import { useLocation, useNavigationType, NavigationType } from 'react-router-dom';

function ScrollToAnchor() {

    const location = useLocation();
    // 👈 Get the navigation type (POP, PUSH, REPLACE)
    const navigationType = useNavigationType(); 

    useEffect(() => {

        const hash = location.hash; // e.g. "#one"

        // --- 1. Determine if we should SCROLL ---
        // A. If it's a PUSH/REPLACE (forward navigation), we always scroll to top or anchor.
        // B. If it's a POP (back/forward) BUT there is a hash, it means the user 
        //    either manually changed the URL or used a <Link to="#anchor"> that resulted in a POP. 
        //    In this case, we MUST scroll to the anchor.
        const shouldRunCustomScroll =
            navigationType !== NavigationType.Pop || (navigationType === NavigationType.Pop && hash);

        if (!shouldRunCustomScroll) {
            console.log("Browser Back/Forward detected. Allowing browser to restore scroll position.");
            return; // Exit and let the browser restore the position
        }

        console.log("entering ScrollToAnchor ...");

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const header = document.querySelector("Header");
                const headerHeight = header ? header.offsetHeight : 0;

                console.log("hash value: ", hash);

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
                const y = headerHeight; // scroll just below header
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });
    }, [location, navigationType]);

    return null;
}

export default ScrollToAnchor;