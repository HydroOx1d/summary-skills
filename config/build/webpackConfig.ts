import { BuildOptions } from "./types/config";
import { webpackDevServer } from "./webpackDevServer";
import { webpackLoaders } from "./webpackLoaders";
import { webpackPlugins } from "./webpackPlugins";
import { webpackResloves } from "./webpackResloves";
import webpack from 'webpack';

const webpackConfig = (options: BuildOptions): webpack.Configuration => {

  const {mode, paths, isDev} = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: webpackPlugins(paths),
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResloves(),
    devServer: isDev ? webpackDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
}

export {
  webpackConfig
}