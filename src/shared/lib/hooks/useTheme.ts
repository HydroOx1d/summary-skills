import { ThemeContext } from "@/app/providers/theme";
import { Theme } from "@/shared/constants/theme";
import React from "react";

export const useTheme = () => {
	const {theme, setTheme} = React.useContext(ThemeContext);

	const toggleTheme = (callback: (theme: Theme) => void) => {
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
    
		callback(newTheme);
	};

	return {
		theme,
		toggleTheme
	};
};
