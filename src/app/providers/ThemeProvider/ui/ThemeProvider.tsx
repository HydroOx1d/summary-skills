import React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultPropsValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
	initialTheme?: Theme
}

export const ThemeProvider = ({ children, initialTheme }: React.PropsWithChildren<ThemeProviderProps>) => {
	const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultPropsValue);

	const providerValue = React.useMemo(() => {
		return {
			theme,
			setTheme
		};
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={providerValue}
		>
			{children}
		</ThemeContext.Provider>
	);
};
