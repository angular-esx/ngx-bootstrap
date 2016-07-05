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

    return sourcePath.pipe(webpackStream({
      context: __dirname,
      output: {
        path: __dirname,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'ngxBootstrap',
      },
      plugins: [
        new webpack.DefinePlugin(webpackVariables)
      ],
      module: {
        loaders: [
          { test: /\.html$/, loader: '../../gulp-tasks/clean-code-loader!html-minifier' },
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
          ngxBootstrap: 'cores/ngx-bootstrap.js',
          utils: 'cores/ngx-bootstrap.utils.js',

          /** core components **/
          baseComponent: 'cores/components/base/base.component.js',
          coreComponent: 'cores/components/index.js',

          /** core directives **/
          baseDirective: 'cores/directives/base/base.directive.js',
          
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
      .pipe(rename('ngx-bootstrap.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(reload({ stream: true }))
      .pipe(rename('ngx-bootstrap.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
  };
};