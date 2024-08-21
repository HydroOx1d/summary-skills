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
	const {theme: defaultTheme = Theme.LIGHT} = useSelector(getAccountSettings);
	const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);
	const [isThemeInited, setIsThemeInited] = React.useState(false);

	React.useEffect(() => {
		if (!isThemeInited) {
			setTheme(defaultTheme);
			setIsThemeInited(true);
		}
	}, [defaultTheme, isThemeInited]);

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
