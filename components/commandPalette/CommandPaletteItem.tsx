'use client';

import { Clock } from 'lucide-react';
import { CommandItem, CommandShortcut } from '@/components/ui/command';
import { CommandItemData } from '@/types/command-palette';

interface CommandPaletteItemProps {
    command: CommandItemData;
    onSelect: () => void;
    formattedShortcuts: Record<string, string>;
    isRecent?: boolean;
}

export function CommandPaletteItem({
    command,
    onSelect,
    formattedShortcuts,
    isRecent = false
}: CommandPaletteItemProps) {
    const value = isRecent
        ? `recent ${command.label} ${command.description || ''}`
        : `${command.label} ${command.description || ''} ${command.keywords?.join(' ') || ''}`;

    return (
        <CommandItem
            key={isRecent ? `recent-${command.id}` : command.id}
            value={value}
            onSelect={onSelect}
        >
            {isRecent ? (
                <Clock className="size-4.5! text-muted-foreground" />
            ) : (
                command.icon
            )}
            <div className="flex flex-col">
                <span>{command.label}</span>
                {command.description && (
                    <span className="text-xs text-muted-foreground">{command.description}</span>
                )}
            </div>
            {command.shortcutKey && (
                <CommandShortcut>{formattedShortcuts[command.shortcutKey]}</CommandShortcut>
            )}
        </CommandItem>
    );
}
