import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator";
import { LangDecorator } from "../../src/shared/config/storybook/LangDecorator";
import "../../src/app/styles/index.scss";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		ThemeDecorator(Theme.LIGHT),
		RouteDecorator(),
		LangDecorator(),
	],
};

export default preview;
