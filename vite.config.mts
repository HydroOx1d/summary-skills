import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import {UserConfig} from "vite";

const config: UserConfig = {
	plugins: [
		react(),
		svgr({
			include: "**/*.svg",
			svgrOptions: {
				plugins: [
					"@svgr/plugin-svgo",
					"@svgr/plugin-jsx"
				],
				svgoConfig: {
					plugins: [
						// TODO: figure out why it doesn't work
						"convertColors"
					]
				}
			}
		})
	],
	resolve: {
		alias: {
			"@": "/src/"
		}
	},
	define: {
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify("http://localhost:3001"),
		__PROJECT__: JSON.stringify("frontend")
	}
};

export default config;