export const safeStorage = {
 getItem(key: string): string | null { try { return localStorage.getItem(key); } catch { return null; } },
 setItem(key: string,value: string): void { try { localStorage.setItem(key,value); } catch { /* Preferences remain usable in memory. */ } },
};
