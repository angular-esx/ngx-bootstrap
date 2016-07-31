var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var uglify = require('gulp-uglify');
var autoprefixer = require('autoprefixer');
var reload = require('browser-sync').reload;
var Q = require('q');

module.exports = function (params) {

  return function () {
    var deferred = Q.defer();
    var _themeName = params.args.theme || 'bootstrap',
      _componentName = params.args.component,
      _directiveName = params.args.directive,
      _webpackVariables = {
        __THEME__: JSON.stringify(_themeName)
      },
      _testScriptPath;

    if (_componentName) {
      _testScriptPath = path.resolve('components', _componentName, 'tests', 'ui', 'isolated-components', 'boot.js');
    } else {
      _testScriptPath = path.resolve('directives', _directiveName, 'tests', 'ui', 'isolated-components', 'boot.js');
    }

    webpack({
      context: path.resolve(__dirname),
      entry: {
        // bootstrap: path.resolve('configs', 'bootstrap.js'),
        // vendors: path.resolve('configs', 'vendors.js'),
        polyfills: path.resolve('configs', 'polyfills.js'),
        // test: _testScriptPath
      },
      output: {
        path: path.resolve('dist', 'js'),
        filename: 'ngx-[name].js'
      },
      plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin(_webpackVariables),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: ['test', 'bootstrap', 'vendors', 'polyfills']
        // }),
      ],
      module: {
        loaders: [
          { test: /\.html$/, loader: 'html-loader' },
          {
            test: /\.(scss|sass)$/,
            loader: '../../gulp-tasks/clean-code-loader!postcss-loader!sass-loader'
          }
        ]
      },
      postcss: function () {
        return [autoprefixer];
      },
      // Create source maps for the bundle
      // devtool: 'source-map',
    }, function (err) {

      deferred.resolve();
    });

    return deferred.promise;

  }
};