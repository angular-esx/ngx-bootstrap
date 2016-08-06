// var path = require('path');
// var gulp = require('gulp');
// var webpack = require('webpack');
// var webpackStream = require('webpack-stream');
// var autoprefixer = require('autoprefixer');
// var path = require('path');
// var reload = require('browser-sync').reload;

// module.exports = function (params) {
//   return function () {

//     return gulp.src('').pipe(webpackStream({
//       context: __dirname,
//       entry: {
//         core: ['cores/index.js'],
//         /** components **/
//         alert: 'components/alert/index.js',
//         breadcrumb: 'components/breadcrumb/index.js',
//         button: 'components/button/index.js',
//         card: 'components/card/index.js',
//         collapse: 'components/collapse/index.js',
//         'drop-menu': 'components/drop-menu/index.js',
//         grid: 'components/grid/index.js',
//         group: 'components/group/index.js',
//         icon: 'components/icon/index.js',
//         jumbotron: 'components/jumbotron/index.js',
//         label: 'components/label/index.js',
//         link: 'components/link/index.js',
//         list: 'components/list/index.js',
//         navbar: 'components/navbar/index.js',
//         pager: 'components/pager/index.js',
//         pagination: 'components/pagination/index.js',
//         popover: 'components/popover/index.js',
//         progress: 'components/progress/index.js',
//         tabs: 'components/tabs/index.js',
//         tooltip: 'components/tooltip/index.js',
//         backdrop: 'components/backdrop/index.js',
//         modal: 'components/modal/index.js',
//         /** directives **/
//         checkbox: 'directives/checkbox/index.js',
//         hide: 'directives/hide/index.js',
//         radio: 'directives/radio/index.js'
//       },
//       output: {
//         path: __dirname,
//         libraryTarget: 'umd',
//         umdNamedDefine: true,
//         library: 'ngx',
//         filename: 'ngx-[name].js',
//       },
//       plugins: [
//         new webpack.optimize.CommonsChunkPlugin({
//           filename: "ngx-core.js",
//           name: "core"
//         })
//       ],
//     }))

var webpack = require('webpack');
var Q = require('q');
var webpackConfig = require('./webpack-common.js');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = function (params) {

  return function () {
    var _deferred = Q.defer();

    webpackConfig.entry = {
      'dist/js/vendors': './configs/webpack/vendors.js',
      'cores/bundles/cores': ['./cores/index.js'],

      'components/alert/bundles/alert': './components/alert/index.js',
      'components/backdrop/bundles/backdrop': './components/backdrop/index.js',
      'components/breadcrumb/bundles/breadcrumb': './components/breadcrumb/index.js',
      'components/button/bundles/button': './components/button/index.js',
      'components/card/bundles/card': './components/card/index.js',
      'components/checkbox/bundles/checkbox': './components/checkbox/index.js',
      'components/drop-menu/bundles/drop-menu': './components/drop-menu/index.js',
      'components/grid/bundles/grid': './components/grid/index.js',
      'components/group/bundles/group': './components/group/index.js',
      'components/hide/bundles/hide': './components/hide/index.js',
      'components/icon/bundles/icon': './components/icon/index.js',
      'components/jumbotron/bundles/jumbotron': './components/jumbotron/index.js',
      'components/label/bundles/label': './components/label/index.js',
      'components/link/bundles/link': './components/link/index.js',
      'components/list/bundles/list': './components/list/index.js',
      'components/modal/bundles/modal': './components/modal/index.js',
      'components/navbar/bundles/navbar': './components/navbar/index.js',
      'components/pager/bundles/pager': './components/pager/index.js',
      'components/pagination/bundles/pagination': './components/pagination/index.js',
      'components/popover/bundles/popover': './components/popover/index.js',
      'components/progress/bundles/progress': './components/progress/index.js',
      'components/radio/bundles/radio': './components/radio/index.js',
      'components/tabs/bundles/tabs': './components/tabs/index.js',
      'components/tooltip/bundles/tooltip': './components/tooltip/index.js'
    };

    webpackConfig.output = {
      filename: '[name].min.js'
    };

    webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new UnminifiedWebpackPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['cores/bundles/cores', 'dist/js/vendors']
      })
    );

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

      _deferred.resolve();
    });

    return _deferred.promise;

  };
};