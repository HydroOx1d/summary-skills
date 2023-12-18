import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import webpack from "webpack";
import cssLoader from "../build/loaders/cssLoad";
import { RuleSetRule } from "webpack";

const config: StorybookConfig = {
	stories: [
		"../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},

	staticDirs: ["../../public/"],

	async webpackFinal(config: webpack.Configuration) {

		config.resolve.modules.push(
			path.resolve(__dirname, "..", "..", "src")
		);
		config.resolve.extensions.push(".tsx", ".ts", ".js");
		config.module.rules.push(cssLoader(true));

		config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
			if(/svg/.test(rule.test as string)) {
				return {
					...rule,
					exclude: /\.svg$/i
				};
			}

			return rule;
		});

		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		config.plugins.push(
			new webpack.DefinePlugin({
				__IS_DEV__: JSON.stringify(true),
				__API__: JSON.stringify("")
			})
		);

		return config;
	},
};
export default config;
