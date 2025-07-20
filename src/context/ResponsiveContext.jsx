import { createContext, useContext, useEffect, useState } from 'react';

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Ensure window is defined (for SSR/Next.js compatibility)
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(max-width: 767px)');
        
        // Update state with initial value
        setIsMobile(mediaQuery.matches);
        
        // Create event listener using modern API
        // Update state when media query match status changes
        const handler = (event) => setIsMobile(event.matches);

        mediaQuery.addEventListener('change', handler);
        return () => {
            mediaQuery.removeEventListener('change', handler);
        };
    }, []);

    return (
        <ResponsiveContext.Provider value={{ isMobile }}>
            {children}
        </ResponsiveContext.Provider>
    );
};

export const useResponsiveContext = () => {
    return useContext(ResponsiveContext);
};