import type { Preview } from "@storybook/react";
import "../../src/app/styles/index.scss";
import {initialize, mswLoader} from "msw-storybook-addon";
import { Theme } from "@/shared/constants/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { RouteDecorator } from "@/shared/config/storybook/RouteDecorator";
import { LangDecorator } from "@/shared/config/storybook/LangDecorator";

initialize();

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		}
	},
	loaders: [mswLoader],
	decorators: [
		ThemeDecorator(Theme.LIGHT),
		RouteDecorator(),
		LangDecorator(),
	],
};

export default preview;
