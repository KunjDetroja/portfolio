'use client';

import { useState, useCallback, useEffect } from 'react';
import { RECENT_COMMANDS_KEY, ONEKO_ENABLED_KEY, MAX_RECENT } from '@/config/CommandPalette';

/**
 * Hook for managing recent commands in localStorage
 */
export function useRecentCommands() {
    const [recentIds, setRecentIds] = useState<string[]>([]);

    // Load recent commands from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(RECENT_COMMANDS_KEY);
        if (stored) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setRecentIds(JSON.parse(stored));
            } catch {
                setRecentIds([]);
            }
        }
    }, []);

    const addToRecent = useCallback((id: string) => {
        setRecentIds((prev) => {
            const filtered = prev.filter((i) => i !== id);
            const updated = [id, ...filtered].slice(0, MAX_RECENT);
            localStorage.setItem(RECENT_COMMANDS_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);

    return { recentIds, addToRecent };
}

/**
 * Hook for managing Oneko cat state
 */
export function useOnekoState() {
    const [onekoEnabled, setOnekoEnabled] = useState(false);

    // Load oneko state from localStorage
    useEffect(() => {
        const onekoStored = localStorage.getItem(ONEKO_ENABLED_KEY);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOnekoEnabled(onekoStored === 'true');
    }, []);

    const toggleOneko = useCallback(() => {
        const newState = !onekoEnabled;
        setOnekoEnabled(newState);
        localStorage.setItem(ONEKO_ENABLED_KEY, String(newState));

        // Toggle the actual cat
        const onekoEl = document.getElementById('oneko');
        if (newState) {
            // Enable: load script if not exists
            if (!onekoEl) {
                const script = document.createElement('script');
                script.src = './oneko/oneko.js';
                script.dataset.cat = './oneko/oneko.gif';
                document.body.appendChild(script);
            } else {
                onekoEl.style.display = 'block';
            }
        } else {
            // Disable: hide the cat
            if (onekoEl) {
                onekoEl.style.display = 'none';
            }
        }
    }, [onekoEnabled]);

    return { onekoEnabled, toggleOneko };
}
