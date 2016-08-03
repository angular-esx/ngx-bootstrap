var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var reload = require('browser-sync').reload;
var Q = require('q');

module.exports = function (params) {

  return function () {
    var deferred = Q.defer();
    var _componentName = params.args.component,
      _directiveName = params.args.directive,
      _testScriptPath;

    if (_componentName) {
      _testScriptPath = './components/' + _componentName + '/tests/ui/isolated-components/boot.js';
    } else {
      _testScriptPath = './directives' + _directiveName + 'tests/ui/isolated-components/boot.js';
    }

    webpack({
      context: path.resolve(__dirname, '..'),
      entry: {
        // polyfills: './configs/webpack/polyfills.js',
        // vendors: './configs/webpack/vendors.js',
        bootstrap: './configs/webpack/bootstrap.js',
        test: _testScriptPath
        // main: './main.js'
      },
      output: {
        path: './dist/js',
        filename: 'ngx-[name].js'
      },
      plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // }),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: ['vendors']
        }),
      ],
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
    }, function (err, stats) {
      if (err) {
        console.log(err);
      }

      if (stats) {
        console.log(stats.toString({
          colors: true,
          children: false,
          chunks: false,
          modules: false
        }));
      }
      // reload browser
      reload({ stream: true });

      deferred.resolve();
    });

    return deferred.promise;

  };
};