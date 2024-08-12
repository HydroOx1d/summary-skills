import { RuleSetRule } from "webpack";
import { BuildOptions } from "../types/config";
import babelPluginRemoveAttributes from "../babel/babel-plugin-remove-attributes";

interface BabelLoaderOptions extends BuildOptions {
  isTSX: boolean;
}
export const babelLoaders = ({isTSX, isDev}: BabelLoaderOptions): RuleSetRule => {
	const isProd = !isDev;

	return {
		test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				cacheDirectory: true,
				plugins: [
					["@babel/plugin-transform-typescript", {
						isTSX
					}],
					"@babel/plugin-transform-runtime",
					isTSX && isProd && [babelPluginRemoveAttributes, {
						attrs: ["data-testid"]
					}]
				].filter(Boolean)
			}
		},
	};
};