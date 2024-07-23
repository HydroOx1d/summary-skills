import { LOCAL_STORAGE_THEME_KEY, Theme } from "@/shared/constants/theme";
import React from "react";
import { ThemeContext } from "../providers/ThemeProvider";

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
