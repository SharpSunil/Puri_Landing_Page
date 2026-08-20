import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            return;
        }

        const id = location.hash.substring(1);

        // Wait until the Home page has rendered
        setTimeout(() => {
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);

    }, [location.pathname, location.hash]);

    return null;
};

export default ScrollToHash;