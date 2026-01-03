'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

// Key for storing scroll positions per route
const SCROLL_POSITIONS_KEY = 'portfolio-scroll-positions';

/**
 * Component that handles smooth scroll restoration:
 * 1. On page reload - smoothly scrolls to saved position
 * 2. On browser back/forward - smoothly scrolls to the position for that route
 * 3. On link navigation - saves current scroll before navigating
 */
export function SmoothScrollRestore() {
    const lenis = useLenis();
    const pathname = usePathname();
    const lastPathname = useRef<string>(pathname);
    const hasRestoredOnMount = useRef(false);

    // Disable browser's default scroll restoration
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    // Save scroll position function
    const saveScrollPosition = useCallback((path: string) => {
        const positions = getScrollPositions();
        positions[path] = window.scrollY;
        saveScrollPositions(positions);
    }, []);

    // Intercept all link clicks to save scroll position before navigation
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (link && link.href && link.href.startsWith(window.location.origin)) {
                // It's an internal link, save current scroll position
                saveScrollPosition(pathname);
            }
        };

        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true);
    }, [pathname, saveScrollPosition]);

    // Restore scroll position on initial mount (for page reload)
    useEffect(() => {
        if (!lenis || hasRestoredOnMount.current) return;

        const positions = getScrollPositions();
        const savedScrollY = positions[pathname];

        if (savedScrollY && savedScrollY > 0) {
            hasRestoredOnMount.current = true;

            // Wait for page to be fully ready
            const timer = setTimeout(() => {
                // Reset scroll to top first
                window.scrollTo(0, 0);
                lenis.scrollTo(0, { immediate: true });

                // Then smooth scroll to saved position
                requestAnimationFrame(() => {
                    lenis.scrollTo(savedScrollY, {
                        duration: 1.2,
                        easing: (t: number) => 1 - Math.pow(1 - t, 4),
                    });
                });

                // Clear saved position for this page
                delete positions[pathname];
                saveScrollPositions(positions);
            }, 150);

            return () => clearTimeout(timer);
        } else {
            hasRestoredOnMount.current = true;
        }
    }, [lenis, pathname]);

    // Restore scroll position when pathname changes (navigation)
    useEffect(() => {
        if (!lenis) return;
        if (lastPathname.current === pathname) return;

        const positions = getScrollPositions();
        const savedScrollY = positions[pathname];

        if (savedScrollY !== undefined && savedScrollY > 0) {
            // Smoothly scroll to saved position
            const timer = setTimeout(() => {
                window.scrollTo(0, 0);
                lenis.scrollTo(0, { immediate: true });

                requestAnimationFrame(() => {
                    lenis.scrollTo(savedScrollY, {
                        duration: 1,
                        easing: (t: number) => 1 - Math.pow(1 - t, 3),
                    });
                });

                // Clear saved position
                delete positions[pathname];
                saveScrollPositions(positions);
            }, 100);

            lastPathname.current = pathname;
            return () => clearTimeout(timer);
        } else {
            // No saved position - scroll to top
            window.scrollTo(0, 0);
        }

        lastPathname.current = pathname;
    }, [pathname, lenis]);

    // Save scroll position before unload (for reload)
    useEffect(() => {
        const handleBeforeUnload = () => {
            saveScrollPosition(pathname);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [pathname, saveScrollPosition]);

    // Save position on popstate (browser back/forward)
    useEffect(() => {
        const handlePopState = () => {
            saveScrollPosition(lastPathname.current);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [saveScrollPosition]);

    return null;
}

// Helper functions
function getScrollPositions(): Record<string, number> {
    try {
        const stored = sessionStorage.getItem(SCROLL_POSITIONS_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch {
        return {};
    }
}

function saveScrollPositions(positions: Record<string, number>) {
    try {
        sessionStorage.setItem(SCROLL_POSITIONS_KEY, JSON.stringify(positions));
    } catch {
        // Ignore storage errors
    }
}
