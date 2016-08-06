var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '..'),
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'angular2-template-loader'
      },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.(scss|sass)$/,
        loader: './gulp-tasks/clean-code-loader!postcss-loader!sass-loader'
      }
    ]
  },

  postcss: function () {
    return [autoprefixer];
  },
  // Create source maps for the bundle
  // devtool: 'source-map',
};