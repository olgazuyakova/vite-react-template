import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

export function useTheme() {
	const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const html = document.querySelector('html');
    if (html && theme) {
	    html.setAttribute('data-app-theme', theme);
		}
  }, [theme]);

  return { theme, setTheme };
}
