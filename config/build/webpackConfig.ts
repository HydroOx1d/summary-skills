import { BuildOptions } from "./types/config";
import { webpackLoaders } from "./webpackLoaders";
import { webpackPlugins } from "./webpackPlugins";
import { webpackResloves } from "./webpackResloves";
import webpack from 'webpack';

const webpackConfig = (options: BuildOptions): webpack.Configuration => {

  const {mode, paths} = options;

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
      rules: webpackLoaders(),
    },
    resolve: webpackResloves(),
  };
}

export {
  webpackConfig
}