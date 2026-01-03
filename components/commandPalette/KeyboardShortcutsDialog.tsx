'use client';

import { Keyboard, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { useFormattedShortcuts } from '@/lib/shortcuts';

interface KeyboardShortcutsDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function KeyboardShortcutsDialog({ open, onOpenChange }: KeyboardShortcutsDialogProps) {
    const formattedShortcuts = useFormattedShortcuts();

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Keyboard className="size-5" />
                        Keyboard Shortcuts
                    </DialogTitle>
                    <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </DialogClose>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                    {/* General */}
                    <ShortcutSection title="General">
                        <ShortcutRow shortcut={formattedShortcuts.openCommandPalette} description="Open command palette" />
                        <ShortcutRow shortcut={formattedShortcuts.focusSearch} description="Focus search" />
                        <ShortcutRow shortcut={formattedShortcuts.showHelp} description="Show keyboard shortcuts" />
                        <ShortcutRow shortcut="Esc" description="Close dialogs" />
                    </ShortcutSection>

                    {/* Navigation */}
                    <ShortcutSection title="Navigation">
                        <ShortcutRow shortcut={formattedShortcuts.goHome} description="Go to Home" />
                        <ShortcutRow shortcut={formattedShortcuts.goWorkExperience} description="Go to Work Experience" />
                        <ShortcutRow shortcut={formattedShortcuts.goProjects} description="Go to Projects" />
                    </ShortcutSection>

                    {/* Theme */}
                    <ShortcutSection title="Theme">
                        <ShortcutRow shortcut={formattedShortcuts.themeLight} description="Light theme" />
                        <ShortcutRow shortcut={formattedShortcuts.themeDark} description="Dark theme" />
                        <ShortcutRow shortcut={formattedShortcuts.themeSystem} description="System theme" />
                    </ShortcutSection>

                    {/* Profiles */}
                    <ShortcutSection title="Profiles">
                        <ShortcutRow shortcut={formattedShortcuts.openGithub} description="Open GitHub" />
                        <ShortcutRow shortcut={formattedShortcuts.openLinkedin} description="Open LinkedIn" />
                        <ShortcutRow shortcut={formattedShortcuts.openEmail} description="Send Email" />
                    </ShortcutSection>
                </div>
            </DialogContent>
        </Dialog>
    );
}

// Section component for grouping shortcuts
function ShortcutSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">{title}</h4>
            <div className="space-y-2">{children}</div>
        </div>
    );
}

// Row component for individual shortcuts
function ShortcutRow({ shortcut, description }: { shortcut: string; description: string }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm">{description}</span>
            <kbd className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md min-w-[24px] text-center">
                {shortcut}
            </kbd>
        </div>
    );
}
