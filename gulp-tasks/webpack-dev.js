var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var browser = require('browser-sync');
var Q = require('q');

module.exports = function (params) {

  return function () {
    var _deferred = Q.defer(),
      _componentName = params.args.component,
      _testScriptPath;
      
    _testScriptPath = './components/' + _componentName + '/tests/ui/isolated-components/boot.js';

    webpack({
      context: path.resolve(__dirname, '..'),
      entry: {
        vendors: './configs/webpack/vendors.js',
        bootstrap: './configs/webpack/bootstrap.js',
        test: _testScriptPath
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
          name: ['test', 'bootstrap', 'vendors']
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
      // 'html-minifier-loader': {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   conservativeCollapse: true,
      //   preserveLineBreaks: true,
      //   caseSensitive: true
      // },
      postcss: function () {
        return [autoprefixer];
      },
      // Create source maps for the bundle
      // devtool: 'source-map',
    }, function (err, stats) {
      if (err) {
        console.log(err);

        _deferred.reject();
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
      browser.reload();

      _deferred.resolve();
    });

    return _deferred.promise;

  };
};