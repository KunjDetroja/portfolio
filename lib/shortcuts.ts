'use client';

import { useSyncExternalStore } from 'react';
import { ShortcutConfig } from '@/types/shortcuts';

// All keyboard shortcuts defined in one place
export const SHORTCUTS = {
    // General
    openCommandPalette: {
        key: 'k',
        meta: true,
        description: 'Open command palette',
    },
    focusSearch: {
        key: '/',
        description: 'Focus search',
    },
    showHelp: {
        key: '?',
        description: 'Show keyboard shortcuts',
    },

    // Navigation
    goHome: {
        key: 'h',
        alt: true,
        description: 'Go to Home',
    },
    goWorkExperience: {
        key: 'w',
        alt: true,
        description: 'Go to Work Experience',
    },
    goProjects: {
        key: 'p',
        alt: true,
        description: 'Go to Projects',
    },

    // Theme
    themeLight: {
        key: 'l',
        alt: true,
        shift: true,
        description: 'Light theme',
    },
    themeDark: {
        key: 'd',
        alt: true,
        shift: true,
        description: 'Dark theme',
    },
    themeSystem: {
        key: 's',
        alt: true,
        shift: true,
        description: 'System theme',
    },

    // Profiles
    openGithub: {
        key: 'g',
        alt: true,
        ctrl: true,
        description: 'Open GitHub',
    },
    openLinkedin: {
        key: 'l',
        alt: true,
        ctrl: true,
        description: 'Open LinkedIn',
    },
    openEmail: {
        key: 'e',
        alt: true,
        ctrl: true,
        description: 'Send Email',
    },
} as const satisfies Record<string, ShortcutConfig>;

export type ShortcutKey = keyof typeof SHORTCUTS;

// Get isMac value (SSR-safe, returns false on server)
function getIsMacSnapshot(): boolean {
    if (typeof window === 'undefined') return false;
    return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
}

function getServerSnapshot(): boolean {
    return false;
}

function subscribe(): () => void {
    // Platform doesn't change, so we don't need to subscribe to anything
    return () => { };
}

// Check if running on Mac using useSyncExternalStore for SSR safety
export function useIsMac(): boolean {
    return useSyncExternalStore(subscribe, getIsMacSnapshot, getServerSnapshot);
}

/**
 * Format a shortcut for display based on OS
 * On Mac: Shows ⌘⌥⇧ symbols
 * On Windows/Linux: Shows Ctrl+Alt+Shift text
 */
export function formatShortcut(shortcut: ShortcutConfig, isMac: boolean = false): string {
    const parts: string[] = [];

    if (isMac) {
        // Mac-style symbols
        if (shortcut.ctrl) parts.push('⌃');
        if (shortcut.alt) parts.push('⌥');
        if (shortcut.shift) parts.push('⇧');
        if (shortcut.meta) parts.push('⌘');
        parts.push(shortcut.key.toUpperCase());
        return parts.join('');
    } else {
        // Windows/Linux-style text
        if (shortcut.ctrl || shortcut.meta) parts.push('Ctrl');
        if (shortcut.alt) parts.push('Alt');
        if (shortcut.shift) parts.push('Shift');
        parts.push(shortcut.key.toUpperCase());
        return parts.join('+');
    }
}

/**
 * Hook to get formatted shortcut string that updates based on OS
 */
export function useFormattedShortcut(shortcutKey: ShortcutKey): string {
    const isMac = useIsMac();
    return formatShortcut(SHORTCUTS[shortcutKey], isMac);
}

/**
 * Get all shortcuts formatted for the current OS
 */
export function useFormattedShortcuts(): Record<ShortcutKey, string> {
    const isMac = useIsMac();

    const formatted = {} as Record<ShortcutKey, string>;
    for (const key of Object.keys(SHORTCUTS) as ShortcutKey[]) {
        formatted[key] = formatShortcut(SHORTCUTS[key], isMac);
    }
    return formatted;
}
