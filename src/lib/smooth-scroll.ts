import { useEffect } from 'react';

/**
 * Pure passive smooth scroll helper
 */
export function useLenis() {
  useEffect(() => {
    // Enable standard smooth scroll behavior on HTML root safely
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    } catch (e) {}
  }, []);
}
