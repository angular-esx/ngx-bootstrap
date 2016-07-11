var fs = require('fs');
var gulp = require('gulp');
var insert = require('gulp-insert');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var jsStringEscape = require('js-string-escape');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var uglify = require('gulp-uglify');
var mkdirp = require('mkdirp');
var autoprefixer = require('autoprefixer');
var path = require('path');
var reload = require('browser-sync').reload;

module.exports = function (params) {
  return function () {

    var _fileService = params.fileService,
      _componentName = params.args.component,
      _themeName = params.args.theme,
      _directiveName = params.args.directive,
      _testCase = params.args.testcase;

    _themeName = _themeName || 'bootstrap';

    var sourcePath, webpackVariables;

    webpackVariables = {
      __THEME__: JSON.stringify(_themeName)
    };

    if (_componentName || _directiveName) {

      if (_componentName) {
        sourcePath = gulp.src(_fileService.getComponentTestCaseBoot(_componentName, _testCase));
      } else if (_directiveName) {
        sourcePath = gulp.src(_fileService.getDirectiveTestCaseBoot(_directiveName, _testCase));
      }

      var _componentThemeName = _componentName + '.component.js';

      webpackVariables.__COMPONENT_FILE__ = JSON.stringify(_componentThemeName);

    } else {

      var components = fs.readdirSync('./components')
        .filter(function (component) {
          try {
            return fs.statSync('./components/' + component).isDirectory();
          } catch (e) {
            return false;
          }
        })
        .map(function (component) {
          return "require('../../components/" + component + '/' + component + ".component." + _themeName + ".js')";
        });

      try {
        mkdirp.sync('./dist/js');
      } catch (e) {
        console.log(e);
      }

      fs.writeFileSync('./dist/js/ngx-bootstrap.js', components.join('\n'), { encoding: 'utf8' });
      sourcePath = gulp.src('./dist/js/ngx-bootstrap.js');
    }

    return gulp.src('').pipe(webpackStream({
      context: __dirname,
      entry: {
        core: ['cores/index.js'],
        alert: 'components/alert/index.js',
        breadcrumb: 'components/breadcrumb/index.js',
        button: 'components/button/index.js',
        card: 'components/card/index.js',
        collapse: 'components/collapse/index.js',
        'drop-menu': 'components/drop-menu/index.js',
        grid: 'components/grid/index.js',
        group: 'components/group/index.js',
        // icon: 'components/icon/index.js',
        jumbotron: 'components/jumbotron/index.js',
        label: 'components/label/index.js',
        link: 'components/link/index.js',
        // list: 'components/list/index.js',
        // navbar: 'components/navbar/index.js',
        // pager: 'components/pager/index.js',
        // pagination: 'components/pagination/index.js',
        // popover: 'components/popover/index.js',
        // progress: 'components/progress/index.js',
        // tabs: 'components/tabs/index.js',
        // tooltip: 'components/tooltip/index.js',
      },
      output: {
        path: __dirname,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'ngxBootstrap',
        filename: 'ngx.[name].js',
      },
      plugins: [
        new webpack.DefinePlugin(webpackVariables),
        new webpack.optimize.CommonsChunkPlugin({
          filename: "ngx.core.js",
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
          directive: 'directive',
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