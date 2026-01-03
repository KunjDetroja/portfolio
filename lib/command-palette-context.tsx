'use client';

import * as React from 'react';

interface CommandPaletteContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const CommandPaletteContext = React.createContext<CommandPaletteContextType | undefined>(undefined);

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    return (
        <CommandPaletteContext.Provider value={{ open, setOpen }}>
            {children}
        </CommandPaletteContext.Provider>
    );
}

export function useCommandPalette() {
    const context = React.useContext(CommandPaletteContext);
    if (!context) {
        throw new Error('useCommandPalette must be used within CommandPaletteProvider');
    }
    return context;
}
