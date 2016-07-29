var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var uglify = require('gulp-uglify');
var autoprefixer = require('autoprefixer');
var reload = require('browser-sync').reload;

module.exports = function (params) {
  return function () {

    var _themeName = params.args.theme || 'bootstrap',
      _componentName = params.args.component,
      _directiveName = params.args.directive,
      _webpackVariables = {
        __THEME__: JSON.stringify(_themeName)
      },
      _testScriptPath;

    if (_componentName) {
      _testScriptPath = 'components/' + _componentName + '/tests/ui/isolated-components/boot.js';
    } else {
      _testScriptPath = 'directives/' + _directiveName + '/tests/ui/isolated-components/boot.js';
    }

    return webpackStream({
      context: __dirname,
      entry: {
        bootstrap: 'configs/bootstrap.js',
        vendors: 'configs/vendors.js',
        polyfills: 'configs/polyfills.js',
        test: _testScriptPath
      },
      output: {
        path: __dirname,
        filename: 'ngx-[name].js'
      },
      plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin(_webpackVariables),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: ['test', 'bootstrap', 'vendors', 'polyfills']
        }),
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
      'html-minifier-loader': {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        preserveLineBreaks: true,
        caseSensitive: true
      },
      postcss: function () {
        return [autoprefixer];
      },
      resolve: {
        root: path.resolve(__dirname, '..'),
        extensions: ['', '.js']
      }
    })
      .pipe(gulp.dest('./dist/js'))
      .pipe(reload({ stream: true }));
  }
};