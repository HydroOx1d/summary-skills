import webpack from 'webpack';

const webpackLoaders = (): webpack.RuleSetRule[] => {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      
      "style-loader",
      
      "css-loader",
      
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