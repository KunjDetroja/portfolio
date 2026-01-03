'use client';

import { Command } from 'lucide-react';
import { useCommandPalette } from '@/lib/command-palette-context';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { SHORTCUTS, formatShortcut, useIsMac } from '@/lib/shortcuts';

export function CommandPaletteButton() {
    const { setOpen } = useCommandPalette();
    const isMac = useIsMac();
    const shortcutDisplay = formatShortcut(SHORTCUTS.openCommandPalette, isMac);

    return (
        <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 px-2 py-1 text-sm text-neutral-500 dark:text-neutral-400 rounded-sm border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                >
                    <span className="hidden sm:inline text-xs">Search</span>
                    <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm">
                        {shortcutDisplay}
                    </kbd>
                    <Command className="size-4 sm:hidden" />
                </button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Search & Commands ({shortcutDisplay})</p>
            </TooltipContent>
        </Tooltip>
    );
}
