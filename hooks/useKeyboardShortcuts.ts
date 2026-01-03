'use client';

import { useEffect, useCallback, useRef } from 'react';
import { KeyboardShortcut, UseKeyboardShortcutsOptions } from '@/types/shortcuts';

export type { KeyboardShortcut } from '@/types/shortcuts';

/**
 * A reusable hook for handling keyboard shortcuts
 * 
 * @example
 * useKeyboardShortcuts([
 *   { key: 'k', meta: true, action: () => setOpen(true), description: 'Open search' },
 *   { key: 'h', alt: true, action: () => router.push('/'), description: 'Go home' },
 * ]);
 */
export function useKeyboardShortcuts(
    shortcuts: KeyboardShortcut[],
    options: UseKeyboardShortcutsOptions = {}
) {
    const { disabled = false } = options;
    const shortcutsRef = useRef(shortcuts);

    // Keep shortcuts ref updated
    useEffect(() => {
        shortcutsRef.current = shortcuts;
    }, [shortcuts]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (disabled) return;

        const target = e.target as HTMLElement;
        const isTyping = target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable ||
            target.closest('[role="combobox"]');

        // Keys that inherently require Shift to type
        const shiftRequiredKeys = ['?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '~'];

        for (const shortcut of shortcutsRef.current) {
            // Skip if typing and shortcut doesn't allow it
            if (isTyping && !shortcut.allowInInput) continue;

            const keyMatch = e.key?.toLowerCase() === shortcut.key.toLowerCase();
            if (!keyMatch) continue;

            // Check if this key inherently requires Shift (like ? is Shift+/)
            const keyRequiresShift = shiftRequiredKeys.includes(shortcut.key);

            // For shortcuts with modifiers, we need to match the modifier
            // For shortcuts without modifiers, we need to ensure no modifiers are pressed
            const hasModifier = shortcut.ctrl || shortcut.meta || shortcut.alt || shortcut.shift;

            if (hasModifier) {
                // Check if the required modifiers match
                const ctrlMetaMatch = shortcut.ctrl || shortcut.meta ? (e.ctrlKey || e.metaKey) : !(e.ctrlKey || e.metaKey);
                const altMatch = shortcut.alt ? e.altKey : !e.altKey;
                const shiftMatch = shortcut.shift ? e.shiftKey : !e.shiftKey;

                if (ctrlMetaMatch && altMatch && shiftMatch) {
                    e.preventDefault();
                    shortcut.action();
                    return;
                }
            } else {
                // No explicit modifier required
                // Allow Shift if the key inherently requires it (like ? requires Shift+/)
                const shiftAllowed = keyRequiresShift ? true : !e.shiftKey;

                if (!e.ctrlKey && !e.metaKey && !e.altKey && shiftAllowed) {
                    e.preventDefault();
                    shortcut.action();
                    return;
                }
            }
        }
    }, [disabled]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
}

/**
 * Format a shortcut for display
 */
export function formatShortcut(shortcut: Pick<KeyboardShortcut, 'key' | 'ctrl' | 'meta' | 'alt' | 'shift'>): string {
    const parts: string[] = [];

    if (shortcut.ctrl || shortcut.meta) {
        parts.push('Ctrl');
    }
    if (shortcut.alt) {
        parts.push('Alt');
    }
    if (shortcut.shift) {
        parts.push('Shift');
    }
    parts.push(shortcut.key.toUpperCase());

    return parts.join('+');
}
