import webpack from "webpack";
import { BuildOptions } from "./types/config";
import cssLoaders from "./loaders/cssLoad";


const webpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};

	const cssLoader = cssLoaders(options.isDev);

	const babelLoader = {
		test: /\.(ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
			},
		},
	};
  
	const tsLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [svgLoader, babelLoader, tsLoader, cssLoader];
};

export {
	webpackLoaders
};