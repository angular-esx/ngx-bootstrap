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

module.exports = function (params) {
  return function () {

    var _fileService = params.fileService,
      _componentName = params.args.component,
      _themeName = params.args.theme,
      _directiveName = params.args.directive,
      _testCase = params.args.testcase;

    _themeName = _themeName || 'bootstrap4';

    var sourcePath, webpackVariables;

    webpackVariables = {
      /** ngx bootstrap & ngx bootstrap utils **/
      __NGX_BOOTSTRAP__: JSON.stringify('cores/ngx-bootstrap.js'),
      __NGX_BOOTSTRAP_UTILS__: JSON.stringify('cores/ngx-bootstrap.utils.js'),

      /** core components **/
      __BASE_COMPONENT__: JSON.stringify('cores/components/base/base.component.js'),
      __ITEM_SERVICE__: JSON.stringify('cores/components/item/services/item.service.js'),
      __ITEM_COMPONENT__: JSON.stringify('cores/components/item/item.component.js'),
      __LINK_SERVICE__: JSON.stringify('cores/components/link/services/link.service.js'),
      __LINK_COMPONENT__: JSON.stringify('cores/components/link/link.component.js'),

      /** core directives **/
      __BASE_DIRECTIVE__: JSON.stringify('cores/directives/base/base.directive.js'),

      /** core services **/
      __CORE_SERVICE__: JSON.stringify('cores/services/index.js'),
      __ANIMATION_SERVICE__: JSON.stringify('cores/services/animation.service.js'),
      __COLOR_SERVICE__: JSON.stringify('cores/services/color.service.js'),
      __POSITION_SERVICE__: JSON.stringify('cores/services/position.service.js'),
      __RENDER_SERVICE__: JSON.stringify('cores/services/render.service.js'),
      __SIZE_SERVICE__: JSON.stringify('cores/services/size.service.js'),
      __STATE_SERVICE__: JSON.stringify('cores/services/state.service.js'),
      __TYPE_SERVICE__: JSON.stringify('cores/services/type.service.js'),
      __WINDOW_SERVICE__: JSON.stringify('cores/services/window.service.js'),
    };

    if (_componentName || _directiveName) {

      if (_componentName) {
        sourcePath = gulp.src(_fileService.getComponentTestCaseBoot(_componentName, _testCase));
      } else if (_directiveName) {
        sourcePath = gulp.src(_fileService.getDirectiveTestCaseBoot(_directiveName, _testCase));
      }

      injectTemplateStyle(_componentName, _themeName);

      var _componentThemeName = _componentName + '.component.' + _themeName + '.js';

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
          injectTemplateStyle(component, _themeName);
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
      ]
    }))
      .pipe(rename('ngx-bootstrap.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(rename('ngx-bootstrap.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
  };
};

function injectTemplateStyle(component, theme) {
  var componentPath = './components/' + component + '/' + component + '.component.js';
  var componentDistPath = './components/' + component + '/';

  var templatePath = function (component, theme) {
    return './components/' + component + '/templates/' + component + '.' + theme + '.html';
  }
  var stylePath = function (component, theme) {
    return './components/' + component + '/css/' + component + '.' + theme + '.css';
  }

  var injectTemplateKey = '/*Inject template at here*/';
  var injectStyleKey = '/*Inject style at here*/';

  var insertTemplate = function (component, theme) {
    var contents = fs.readFileSync(templatePath(component, theme), 'utf8');

    return "template: '" + jsStringEscape(contents) + "',";
  }
  var insertStyle = function (component, theme) {
    var contents = fs.readFileSync(stylePath(component, theme), 'utf8')
      .replace(/[\r\n]+/g, ' ')
      .replace(/  +/g, ' ');

    return "styles: ['" + contents + "'],";
  }

  var styleTheme = stylePath(component, theme);
  var templateTheme = templatePath(component, theme);

  if (fs.existsSync(styleTheme) || fs.existsSync(templateTheme)) {
    gulp.src(componentPath)
      .pipe(insert.transform(function (contents, file) {
        if (fs.existsSync(styleTheme)) {
          contents = contents.replace(injectTemplateKey, insertTemplate(component, theme))
        }

        if (fs.existsSync(templateTheme)) {
          contents = contents.replace(injectStyleKey, insertStyle(component, theme));
        }

        return contents;
      }))
      .pipe(rename(component + '.component.' + theme + '.js'))
      .pipe(gulp.dest(componentDistPath));

  } else {
    console.log("Don't have css or template");
  }
}