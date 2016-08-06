var webpack = require('webpack');
var browser = require('browser-sync');
var Q = require('q');
var webpackConfig = require('./webpack-common.js');

module.exports = function (params) {

  return function () {
    var _deferred = Q.defer(),
      _componentName = params.args.component,
      _testScriptPath;

    _testScriptPath = './components/' + _componentName + '/tests/ui/isolated-components/boot.js';

    webpackConfig.entry = {
      vendors: './configs/webpack/vendors.js',
      bootstrap: './configs/webpack/bootstrap.js',
      test: _testScriptPath
    };

    webpackConfig.output = {
      path: './dist/js',
      filename: 'ngx-[name].js'
    };

    webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name: ['test', 'bootstrap', 'vendors']
    }));

    webpack(webpackConfig, function (err, stats) {
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