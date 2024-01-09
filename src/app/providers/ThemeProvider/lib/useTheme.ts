import React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
	const {theme, setTheme} = React.useContext(ThemeContext);

	const toggleTheme = () => {
		let newTheme: Theme;

		switch(theme) {
		case Theme.LIGHT:
			newTheme = Theme.DARK;
			break;
		case Theme.DARK:
			newTheme = Theme.BLUE;
			break;
		case Theme.BLUE:
			newTheme = Theme.LIGHT;
			break;
		default:
			newTheme = Theme.LIGHT;
		}
    
		setTheme?.(newTheme);
    
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {
		theme,
		toggleTheme
	};
};
