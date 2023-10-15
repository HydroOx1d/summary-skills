import webpack from 'webpack';

const webpackLoaders = (): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    tsLoader
  ];
}

export {
  webpackLoaders
}