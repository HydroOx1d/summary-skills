import {Configuration as WebpackDevConfig} from "webpack-dev-server";
import { BuildOptions } from "./types/config";

const webpackDevServer = (options: BuildOptions): WebpackDevConfig => {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
		hot: true
	};
};

export {
	webpackDevServer
};