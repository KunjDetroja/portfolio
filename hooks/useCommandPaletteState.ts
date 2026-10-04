'use client';

import { safeStorage } from '@/lib/safe-storage';
import { setOnekoVisible } from '@/lib/oneko';
import { useState, useCallback, useEffect } from 'react';
import { RECENT_COMMANDS_KEY, ONEKO_ENABLED_KEY, MAX_RECENT } from '@/config/CommandPalette';

/**
 * Hook for managing recent commands in localStorage
 */
export function useRecentCommands() {
    const [recentIds, setRecentIds] = useState<string[]>([]);

    // Load recent commands from localStorage
    useEffect(() => {
        const stored = safeStorage.getItem(RECENT_COMMANDS_KEY);
        if (stored) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setRecentIds((() => { const ids: unknown = JSON.parse(stored); return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === 'string').slice(0,MAX_RECENT) : []; })());
            } catch {
                // Ignore malformed stored preferences.
            }
        }
    }, []);

    const addToRecent = useCallback((id: string) => {
        setRecentIds((prev) => {
            const filtered = prev.filter((i) => i !== id);
            const updated = [id, ...filtered].slice(0, MAX_RECENT);
            safeStorage.setItem(RECENT_COMMANDS_KEY, JSON.stringify(updated));
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
        const onekoStored = safeStorage.getItem(ONEKO_ENABLED_KEY);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOnekoEnabled(onekoStored === 'true');
    }, []);

    const toggleOneko = useCallback(() => {
        const newState = !onekoEnabled;
        setOnekoEnabled(newState);
        safeStorage.setItem(ONEKO_ENABLED_KEY, String(newState));

        document.documentElement.dataset.oneko=String(newState);
        setOnekoVisible(newState);
    }, [onekoEnabled]);

    return { onekoEnabled, toggleOneko };
}
