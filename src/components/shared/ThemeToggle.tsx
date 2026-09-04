import { DARK, LIGHT, useTheme } from '@hooks/useTheme';

import DarkThemeIcon from '@svg/dark.svg?react';
import LightThemeIcon from '@svg/light.svg?react';

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme === DARK;

	const changeTheme = () => setTheme(isDark ? LIGHT : DARK);

	return (
		<div className="fixed left-9 bottom-15 cursor-pointer" onClick={changeTheme}>
			{!isDark && <DarkThemeIcon className="h-6" />}
			{isDark && <LightThemeIcon className="h-6" />}
		</div>
	);
}