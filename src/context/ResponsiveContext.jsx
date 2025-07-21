import { createContext, useContext, useEffect, useState } from 'react';

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        // Ensure window is defined (for SSR/Next.js compatibility)
        if (typeof window === 'undefined') return;

        const mobileQuery = window.matchMedia('(max-width: 767px)');
        const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
        
        // Update state with initial value
        setIsMobile(mobileQuery.matches);
        setIsTablet(tabletQuery.matches);
        
        // Create event listener using modern API
        // Update state when media query match status changes
        const mobileHandler = (event) => setIsMobile(event.matches);
        const tabletHandler = (event) => setIsTablet(event.matches);

        mobileQuery.addEventListener('change', mobileHandler);
        tabletQuery.addEventListener('change', tabletHandler);
        return () => {
            mobileQuery.removeEventListener('change', mobileHandler);
            tabletQuery.removeEventListener('change', tabletHandler);
            // Clean up listeners to prevent memory leaks
        };
    }, []);

    return (
        <ResponsiveContext.Provider value={{ isMobile, isTablet }}>
            {children}
        </ResponsiveContext.Provider>
    );
};

export const useResponsiveContext = () => {
    return useContext(ResponsiveContext);
};