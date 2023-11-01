import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BuildOptions } from "./types/config";

const webpackPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
	return [
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(options.isDev)
		}),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: options.paths.html
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash8].css"
		}),
		new BundleAnalyzerPlugin()
	];
};

export {webpackPlugins};