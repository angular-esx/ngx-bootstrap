var webpack = require('webpack');

module.exports = {
  context: __dirname,
  output: {
    path: __dirname,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'ngxBootstrap',
  }
};