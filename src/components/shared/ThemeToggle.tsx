import { useTheme } from '@hooks/useTheme';

import DarkThemeIcon from '@svg/dark.svg?react';
import LightThemeIcon from '@svg/light.svg?react';

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';
	const changeTheme = () => setTheme(isDark ? 'light' : 'dark');

	return (
		<div className="fixed left-10 bottom-15 cursor-pointer" onClick={changeTheme}>
			{!isDark && <DarkThemeIcon className="h-6" />}
			{isDark && <LightThemeIcon className="h-6" />}
		</div>
	);
}