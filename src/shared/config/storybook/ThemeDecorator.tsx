import { ThemeProvider } from "@/app/providers/theme";
import { Theme } from "@/shared/constants/theme";
import { toggleFeature } from "@/shared/lib/features/toggleFeature";
import { StoryFn } from "@storybook/react";

export const ThemeDecorator = (theme?: Theme) => {
	const appClassname = toggleFeature({
		name: "isAppRedesigned",
		on: () => "app_redesigned",
		off: () => "app"
	});

	const inner = (Story: StoryFn) => {
		return (
			<ThemeProvider initialTheme={theme}>
				<div className={appClassname}>
					<Story/>
				</div>
			</ThemeProvider>
		);
	};

	return inner;
};