import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks if a media query matches
 * @param query - The media query to match against (e.g., '(min-width: 768px)')
 * @returns boolean - Whether the media query matches
 * @note This hook is not suitable for environments without a `window` object (e.g., during SSR).
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure window is defined (for SSR/Next.js compatibility)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    
    // Update state with initial value
    setMatches(mediaQuery.matches);
    
    // Create event listener using modern API
    // Update state when media query match status changes
    const handler = (event) => setMatches(event.matches);
    
    // Add listener (use addEventListener for broader browser support)
    mediaQuery.addEventListener('change', handler);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]); // Re-run effect if query changes

  return matches;
}

export default useMediaQuery;