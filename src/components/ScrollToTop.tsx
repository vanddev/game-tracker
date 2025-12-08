import { useLayoutEffect } from "react";

function ScrollToTop() {

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return null;
}

export default ScrollToTop;