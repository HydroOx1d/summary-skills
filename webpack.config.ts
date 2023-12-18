import path from "path";
import webpack from "webpack";
import { webpackConfig } from "./config/build/webpackConfig";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
	const mode = env.mode || "development";

	const isDev = mode === "development";
	const PORT = env.port || 3000;

	const API_URL = env.apiUrl || "http://localhost:3001";

	const config: webpack.Configuration = webpackConfig({
		mode,
		paths: {
			build: path.resolve(__dirname, "build"),
			entry: path.resolve(__dirname, "src", "index.tsx"),
			html: path.resolve(__dirname, "public", "index.html"),
			src: path.resolve(__dirname, "src"),
		},
		port: PORT,
		isDev,
		apiUrl: API_URL,
	});

	return config;
};