import { Theme } from "app/providers/ThemeProvider";


export const ThemeDecorator = (theme: Theme) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const inner = (Story: any): any => {
		return (
			<div className={`app ${theme}`}>
				<Story/>
			</div>
		);
	};

	return inner;
};