import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';


const webpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Создаем отдельный css файл только в production режиме
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,

      {
        loader: "css-loader",
        options: {
          modules: {
            // Делаем уникальным только те классы, которые содержатся в example.module.scss|sass
            auto: (s: string) => Boolean(s.includes(".module.")),
            localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },

      "sass-loader",
    ],
  };
  
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    tsLoader,
    cssLoader
  ];
}

export {
  webpackLoaders
}