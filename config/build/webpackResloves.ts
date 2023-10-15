import webpack from 'webpack';
const webpackResloves = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}

export {
  webpackResloves
}