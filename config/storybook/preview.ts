import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator";
import { LangDecorator } from "../../src/shared/config/storybook/LangDecorator";
import "../../src/app/styles/index.scss";
import {initialize, mswLoader} from "msw-storybook-addon";
import { http, HttpResponse } from "msw";

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
