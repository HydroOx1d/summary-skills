import { getAccountSettings } from "@/entity/User";
import { Theme } from "@/shared/constants/theme";
import React from "react";
import { useSelector } from "react-redux";

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({});

interface ThemeProviderProps {
	initialTheme?: Theme
}

export const ThemeProvider = ({ children, initialTheme }: React.PropsWithChildren<ThemeProviderProps>) => {
	const {theme: defaultTheme} = useSelector(getAccountSettings);
	const [theme, setTheme] = React.useState(initialTheme || defaultTheme || Theme.LIGHT);

	React.useEffect(() => {
		if (!initialTheme) {
			setTheme(defaultTheme ?? Theme.LIGHT);
		}
	}, [defaultTheme, initialTheme]);

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
