import { useState, useEffect } from 'react';
import { storage, STORAGE_KEY } from '@/utils/storage';

export const DARK = 'dark';
export const LIGHT = 'light';
export const THEMES = [DARK, LIGHT] as const;
export type ThemeType = typeof THEMES[number];

export function useTheme() {
	const storageTheme = storage.get(STORAGE_KEY.THEME);
	const isDark: boolean = storageTheme ? storageTheme === DARK : window?.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useState<ThemeType>(isDark ? DARK : LIGHT);

  useEffect(() => {
    const newTheme = theme === DARK ? DARK : LIGHT;
    const html = document.querySelector('html');
    if (html) {
	    html.setAttribute('data-app-theme', newTheme);
		}
		storage.set(STORAGE_KEY.THEME, newTheme);
  }, [theme]);

  return { theme, setTheme };
}
