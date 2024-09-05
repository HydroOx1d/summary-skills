import { LangDecorator } from "@/shared/config/storybook/LangDecorator";
import { RouteDecorator } from "@/shared/config/storybook/RouteDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../../src/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";

initialize();

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		themes: {
			default: "light",
			list: [
				{ name: "light", class: "app_light_theme", color: "#fff" },
				{ name: "dark", class: "app_dark_theme", color: "#000" },
			]
		}
	},
	loaders: [mswLoader],
	decorators: [
		RouteDecorator(),
		LangDecorator(),
		StoreDecorator({})
	],
};

export default preview;
