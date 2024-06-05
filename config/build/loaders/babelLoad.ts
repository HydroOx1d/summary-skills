import { RuleSetRule } from "webpack";
import { BuildOptions } from "../types/config";
import babelPluginRemoveAttributes from "../babel/babel-plugin-remove-attributes";

interface BabelLoaderOptions extends BuildOptions {
  isTSX: boolean;
}
export const babelLoaders = ({isTSX}: BabelLoaderOptions): RuleSetRule => {
	return {
		test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				plugins: [
					["@babel/plugin-transform-typescript", {
						isTSX
					}],
					"@babel/plugin-transform-runtime",
					isTSX && [babelPluginRemoveAttributes, {
						attrs: ["data-testid"]
					}]
				].filter(Boolean)
			}
		},
	};
};