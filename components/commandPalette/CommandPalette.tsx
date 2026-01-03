'use client';

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandSeparator } from '@/components/ui/command';
import { Home, Briefcase, FolderOpen, Sun, Moon, Cat, Copy, Share2, Download, Github, Linkedin, Mail, Monitor, Keyboard } from 'lucide-react';
import { useCommandPalette } from '@/lib/command-palette-context';
import { useTransitionRouter } from 'next-view-transitions';
import { useCallback, useMemo, useState } from 'react';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useFormattedShortcuts } from '@/lib/shortcuts';

import { CommandItemData } from '@/types/command-palette';
import { CommandPaletteItem } from './CommandPaletteItem';
import { KeyboardShortcutsDialog } from './KeyboardShortcutsDialog';
import { useRecentCommands, useOnekoState } from '@/hooks/useCommandPaletteState';
import { useThemeToggle } from '../theme/ThemeSwitch';

export function CommandPalette() {
    const { open, setOpen } = useCommandPalette();
    const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);
    const router = useTransitionRouter();
    const { setCrazyDarkTheme, setCrazyLightTheme, setSystemTheme } = useThemeToggle();
    const formattedShortcuts = useFormattedShortcuts();

    const { recentIds, addToRecent } = useRecentCommands();
    const { onekoEnabled, toggleOneko } = useOnekoState();

    // Global keyboard shortcuts
    const shortcuts = useMemo(() => [
        // Command palette shortcuts (always work)
        { key: 'k', meta: true, action: () => setOpen(!open), allowInInput: true },
        { key: '/', action: () => setOpen(true) },
        { key: '?', action: () => setShowShortcutsHelp(true) },

        // Navigation shortcuts (Alt + key)
        { key: 'h', alt: true, action: () => { router.push('/'); addToRecent('nav-home'); } },
        { key: 'w', alt: true, action: () => { router.push('/work-experience'); addToRecent('nav-experience'); } },
        { key: 'p', alt: true, action: () => { router.push('/projects'); addToRecent('nav-projects'); } },

        // Theme shortcuts (Alt + Shift + key)
        { key: 'l', alt: true, shift: true, action: () => { setCrazyLightTheme({ variant: 'circle', start: 'center', blur: true, gifUrl: '' }); addToRecent('settings-theme-light'); } },
        { key: 'd', alt: true, shift: true, action: () => { setCrazyDarkTheme({ variant: 'circle', start: 'center', blur: true, gifUrl: '' }); addToRecent('settings-theme-dark'); } },
        { key: 's', alt: true, shift: true, action: () => { setSystemTheme({ variant: 'circle', start: 'center', blur: true, gifUrl: '' }); addToRecent('settings-theme-system'); } },

        // Profile shortcuts (Alt + Ctrl/Cmd + key)
        { key: 'g', alt: true, ctrl: true, action: () => { window.open('https://github.com/KunjDetroja', '_blank'); addToRecent('profile-github'); } },
        { key: 'l', alt: true, ctrl: true, action: () => { window.open('https://linkedin.com/in/kunjdetroja', '_blank'); addToRecent('profile-linkedin'); } },
        { key: 'e', alt: true, ctrl: true, action: () => { window.open('mailto:kunjdetroja52@gmail.com', '_blank'); addToRecent('profile-email'); } },
    ], [open, setOpen, router, setCrazyLightTheme, setSystemTheme, setCrazyDarkTheme, addToRecent]);

    useKeyboardShortcuts(shortcuts, { disabled: open });

    // Actions
    const copyEmail = useCallback(async () => {
        await navigator.clipboard.writeText('kunjdetroja52@gmail.com');
    }, []);

    const sharePortfolio = useCallback(async () => {
        if (navigator.share) {
            await navigator.share({
                title: 'Kunj Detroja - Full Stack Developer',
                text: 'Check out my portfolio!',
                url: window.location.origin,
            });
        } else {
            await navigator.clipboard.writeText(window.location.origin);
        }
    }, []);

    // Helper to get command dialog center coordinates
    const getDialogCenterCoords = () => {
        const dialog = document.querySelector('[role="dialog"]');
        if (dialog) {
            const rect = dialog.getBoundingClientRect();
            return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        }
        return undefined; // Falls back to center if dialog not found
    };

    // Command definitions
    const commands: CommandItemData[] = useMemo(() => [
        // Navigation
        { id: 'nav-home', label: 'Go to Home', description: 'Navigate to homepage', icon: <Home className="size-4.5!" />, shortcutKey: 'goHome', action: () => router.push('/'), group: 'navigation' },
        { id: 'nav-experience', label: 'Go to Work Experience', description: 'View work experience', icon: <Briefcase className="size-4.5!" />, shortcutKey: 'goWorkExperience', action: () => router.push('/work-experience'), group: 'navigation' },
        { id: 'nav-projects', label: 'Go to Projects', description: 'Browse all projects', icon: <FolderOpen className="size-4.5!" />, shortcutKey: 'goProjects', action: () => router.push('/projects'), group: 'navigation' },

        // Settings
        { id: 'settings-theme-light', label: 'Switch to Light Theme', description: 'Enable light mode', icon: <Sun className="size-4.5!" />, shortcutKey: 'themeLight', action: () => setCrazyLightTheme({ variant: 'circle', start: getDialogCenterCoords(), blur: true, gifUrl: '' }), group: 'settings' },
        { id: 'settings-theme-dark', label: 'Switch to Dark Theme', description: 'Enable dark mode', icon: <Moon className="size-4.5!" />, shortcutKey: 'themeDark', action: () => setCrazyDarkTheme({ variant: 'circle', start: getDialogCenterCoords(), blur: true, gifUrl: '' }), group: 'settings' },
        { id: 'settings-theme-system', label: 'Use System Theme', description: 'Match system preference', icon: <Monitor className="size-4.5!" />, shortcutKey: 'themeSystem', action: () => setSystemTheme({ variant: 'circle', start: getDialogCenterCoords(), blur: true, gifUrl: '' }), group: 'settings' },
        { id: 'settings-oneko', label: onekoEnabled ? 'Disable Oneko Cat' : 'Enable Oneko Cat', description: onekoEnabled ? 'Turn off the following cat' : 'Turn on the cute following cat', keywords: ['cat', 'neko', 'pet', 'anime', 'cute', 'following', 'toggle'], icon: <Cat className="size-4.5!" />, action: toggleOneko, group: 'settings' },

        // Actions
        { id: 'action-help', label: 'Keyboard Shortcuts', description: 'Show all keyboard shortcuts', keywords: ['help', 'shortcuts', 'keys', 'hotkeys'], icon: <Keyboard className="size-4.5!" />, shortcutKey: 'showHelp', action: () => setShowShortcutsHelp(true), group: 'actions' },
        { id: 'action-copy-email', label: 'Copy Email Address', description: 'Copy kunjdetroja52@gmail.com', icon: <Copy className="size-4.5!" />, action: copyEmail, group: 'actions' },
        { id: 'action-share', label: 'Share Portfolio', description: 'Share this portfolio', icon: <Share2 className="size-4.5!" />, action: sharePortfolio, group: 'actions' },
        { id: 'action-download-cv', label: 'Download Resume', description: 'Download my CV/Resume', icon: <Download className="size-4.5!" />, action: () => window.open('/resume.pdf', '_blank'), group: 'actions' },

        // Profiles
        { id: 'profile-github', label: 'Open GitHub', description: 'View GitHub profile', icon: <Github className="size-4.5!" />, shortcutKey: 'openGithub', action: () => window.open('https://github.com/KunjDetroja', '_blank'), group: 'profiles' },
        { id: 'profile-linkedin', label: 'Open LinkedIn', description: 'View LinkedIn profile', icon: <Linkedin className="size-4.5!" />, shortcutKey: 'openLinkedin', action: () => window.open('https://linkedin.com/in/kunjdetroja', '_blank'), group: 'profiles' },
        { id: 'profile-email', label: 'Send Email', description: 'Open email client', icon: <Mail className="size-4.5!" />, shortcutKey: 'openEmail', action: () => window.open('mailto:kunjdetroja52@gmail.com', '_blank'), group: 'profiles' },
    ], [router, setCrazyLightTheme, setCrazyDarkTheme, setSystemTheme, onekoEnabled, toggleOneko, copyEmail, sharePortfolio]);

    const runCommand = useCallback((command: CommandItemData) => {
        setOpen(false);
        command.action();
        setTimeout(() => addToRecent(command.id), 300);
    }, [addToRecent, setOpen]);

    // Grouped commands
    const recentCommands = useMemo(() =>
        recentIds.map(id => commands.find(c => c.id === id)).filter(Boolean) as CommandItemData[],
        [recentIds, commands]
    );
    const navigationCommands = commands.filter(c => c.group === 'navigation');
    const settingsCommands = commands.filter(c => c.group === 'settings');
    const actionCommands = commands.filter(c => c.group === 'actions');
    const profileCommands = commands.filter(c => c.group === 'profiles');

    return (
        <>
            <CommandDialog open={open} onOpenChange={setOpen} showCloseButton={false}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    {recentCommands.length > 0 && (
                        <>
                            <CommandGroup heading="Recent">
                                {recentCommands.map((command) => (
                                    <CommandPaletteItem
                                        key={`recent-${command.id}`}
                                        command={command}
                                        onSelect={() => runCommand(command)}
                                        formattedShortcuts={formattedShortcuts}
                                        isRecent
                                    />
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    <CommandGroup heading="Navigation">
                        {navigationCommands.map((command) => (
                            <CommandPaletteItem
                                key={command.id}
                                command={command}
                                onSelect={() => runCommand(command)}
                                formattedShortcuts={formattedShortcuts}
                            />
                        ))}
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading="Settings">
                        {settingsCommands.map((command) => (
                            <CommandPaletteItem
                                key={command.id}
                                command={command}
                                onSelect={() => runCommand(command)}
                                formattedShortcuts={formattedShortcuts}
                            />
                        ))}
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading="Actions">
                        {actionCommands.map((command) => (
                            <CommandPaletteItem
                                key={command.id}
                                command={command}
                                onSelect={() => runCommand(command)}
                                formattedShortcuts={formattedShortcuts}
                            />
                        ))}
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading="Profiles">
                        {profileCommands.map((command) => (
                            <CommandPaletteItem
                                key={command.id}
                                command={command}
                                onSelect={() => runCommand(command)}
                                formattedShortcuts={formattedShortcuts}
                            />
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>

            <KeyboardShortcutsDialog
                open={showShortcutsHelp}
                onOpenChange={setShowShortcutsHelp}
            />
        </>
    );
}
