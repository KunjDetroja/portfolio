import { SHORTCUTS } from '@/lib/shortcuts';

export interface CommandItemData {
    id: string;
    label: string;
    description?: string;
    keywords?: string[];
    icon: React.ReactNode;
    shortcutKey?: keyof typeof SHORTCUTS;
    action: () => void;
    group: 'recent' | 'navigation' | 'settings' | 'actions' | 'profiles';
}
