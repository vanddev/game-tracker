import { useLayoutEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  
    const location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return null;
}

export default ScrollToTop;