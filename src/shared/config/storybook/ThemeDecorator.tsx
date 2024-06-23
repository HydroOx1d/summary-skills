import { Theme, ThemeProvider } from "@/app/providers/ThemeProvider";


export const ThemeDecorator = (theme: Theme) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const inner = (Story: any): any => {
		return (
			<ThemeProvider initialTheme={theme}>
				<div className={`app ${theme}`}>
					<Story/>
				</div>
			</ThemeProvider>
		);
	};

	return inner;
};