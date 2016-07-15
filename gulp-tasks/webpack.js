var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var uglify = require('gulp-uglify');
var autoprefixer = require('autoprefixer');
var path = require('path');
var reload = require('browser-sync').reload;

module.exports = function (params) {
  return function () {

    var _themeName = params.args.theme || 'bootstrap',
      webpackVariables = {
        __THEME__: JSON.stringify(_themeName)
      };

    return gulp.src('').pipe(webpackStream({
      context: __dirname,
      entry: {
        core: ['cores/index.js'],
        /** components **/
        alert: 'components/alert/index.js',
        breadcrumb: 'components/breadcrumb/index.js',
        button: 'components/button/index.js',
        card: 'components/card/index.js',
        collapse: 'components/collapse/index.js',
        'drop-menu': 'components/drop-menu/index.js',
        grid: 'components/grid/index.js',
        group: 'components/group/index.js',
        icon: 'components/icon/index.js',
        jumbotron: 'components/jumbotron/index.js',
        label: 'components/label/index.js',
        link: 'components/link/index.js',
        list: 'components/list/index.js',
        navbar: 'components/navbar/index.js',
        pager: 'components/pager/index.js',
        pagination: 'components/pagination/index.js',
        popover: 'components/popover/index.js',
        progress: 'components/progress/index.js',
        tabs: 'components/tabs/index.js',
        tooltip: 'components/tooltip/index.js',
        /** directives **/
        checkbox: 'directives/checkbox/index.js',
        hide: 'directives/hide/index.js',
        radio: 'directives/radio/index.js',
        'toggle-item': 'directives/toggle-item/index.js'
      },
      output: {
        path: __dirname,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'ngxBootstrap',
        filename: 'ngx-[name].js',
      },
      plugins: [
        new webpack.DefinePlugin(webpackVariables),
        new webpack.optimize.CommonsChunkPlugin({
          filename: "ngx-core.js",
          name: "core"
        })
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
        alias: {
          cores: 'cores',
          components: 'components',
          directive: 'directives',
          ngxBootstrap: 'cores/index.js',
          utils: 'cores/utils.js',

          /** core components **/
          baseComponent: 'cores/components/base/base.component.js',
          coreComponent: 'cores/components/index.js',

          /** core directives **/
          baseDirective: 'cores/directives/base/base.directive.js',
          transcludeDirective: 'cores/directives/transclude/transclude.directive.js',

          /** core services **/
          coreService: 'cores/services/index.js',
          animationService: 'cores/services/animation.service.js',
          breakpointService: 'cores/services/breakpoint.service.js',
          colorService: 'cores/services/color.service.js',
          positionService: 'cores/services/position.service.js',
          renderService: 'cores/services/render.service.js',
          sizeService: 'cores/services/size.service.js',
          stateService: 'cores/services/state.service.js',
          typeService: 'cores/services/type.service.js',
          windowService: 'cores/services/window.service.js',
        },
        extensions: ['', '.js']
      },
    }))
      .pipe(gulp.dest('./dist/js'))
      .pipe(reload({ stream: true }));
  };
};