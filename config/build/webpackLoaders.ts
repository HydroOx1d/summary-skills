import webpack from "webpack";
import { BuildOptions } from "./types/config";
import cssLoaders from "./loaders/cssLoad";
import { babelLoaders } from "./loaders/babelLoad";

const webpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
	const svgLoader: webpack.RuleSetRule = {
		test: /\.svg$/,
		exclude: /node_modules/,
		use: [
			{
				loader: "@svgr/webpack",
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: "convertColors",
								params: {
									currentColor: true
								}
							}
						]
					}
				}
			}
		],
	};

	const cssLoader = cssLoaders(options.isDev);

	const babelLoaderNotTSX = babelLoaders({...options, isTSX: false});
	const babelLoaderTSX = babelLoaders({...options, isTSX: true});

	return [svgLoader, babelLoaderNotTSX, babelLoaderTSX, cssLoader];
};

export {
	webpackLoaders
};