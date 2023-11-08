import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

const cssLoader = (isDev: boolean): RuleSetRule => {
	return {
		test: /\.s[ac]ss$/i,
		use: [
			// Создаем отдельный css файл только в production режиме
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,

			{
				loader: "css-loader",
				options: {
					modules: {
						// Делаем уникальным только те классы, которые содержатся в example.module.scss|sass
						auto: (s: string) => Boolean(s.includes(".module.")),
						localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
					},
				},
			},

			"sass-loader",
		],
	};
};

export default cssLoader;