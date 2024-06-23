import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";

const webpackPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
	const plugins = [
		new BundleAnalyzerPlugin({
			openAnalyzer: options.isDev,
			analyzerMode: options.isDev ? "server": "static",
			reportFilename: "bundleInfo.html"
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(options.isDev),
			__API__: JSON.stringify(options.apiUrl),
			__PROJECT__: JSON.stringify(options.project)
		}),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: options.paths.html
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash8].css"
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: options.paths.locales,
					to: options.paths.buildLocales
				}
			]
		})
	];

	if (options.isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin());
		plugins.push(new ReactRefreshPlugin());
		plugins.push(new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true,
				},
				mode: "write-references",
			},
		}));
	}
	
	return plugins;
};

export { webpackPlugins };
