import path from 'path'
import webpack from 'webpack'
import { webpackConfig } from './config/build/webpackConfig';

const config: webpack.Configuration = webpackConfig({
  mode: "production",
  paths: {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html")
  }
});

export default config;