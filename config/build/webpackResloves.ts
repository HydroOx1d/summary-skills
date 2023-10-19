import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

const webpackResloves = (options: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules:[options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {}
  };
}

export {
  webpackResloves
}