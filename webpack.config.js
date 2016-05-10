var webpack = require('webpack');

module.exports = {
  context: __dirname,
  // entry: "./ngx.js",
  output: {
    path: __dirname,
    // filename: "ngx.js",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'ngxBootstrap',
  },
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};