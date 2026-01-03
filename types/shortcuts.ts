// Keyboard shortcuts types
export interface KeyboardShortcut {
    key: string;
    ctrl?: boolean;
    meta?: boolean;
    alt?: boolean;
    shift?: boolean;
    action: () => void;
    description?: string;
    /** If true, shortcut works even when typing in input/textarea */
    allowInInput?: boolean;
}

export interface UseKeyboardShortcutsOptions {
    /** If true, shortcuts are disabled */
    disabled?: boolean;
}

// Shortcut configuration types
export interface ShortcutConfig {
    key: string;
    ctrl?: boolean;
    meta?: boolean;
    alt?: boolean;
    shift?: boolean;
    description: string;
}
