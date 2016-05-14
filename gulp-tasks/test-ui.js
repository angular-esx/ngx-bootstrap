var fs = require('fs');
var gulp = require('gulp');
var insert = require('gulp-insert');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var jsStringEscape = require('js-string-escape');
var webpack = require('webpack-stream');

module.exports = function (params) {
  return function () {
    var _streamSeries = params.plugins.streamSeries,
        _fileService = params.fileService,
        _libs = _fileService.LIBRARIES,
        _componentName = params.args.component,
        _directiveName = params.args.directive,
        _themeName = params.args.theme,
        _testCase = params.args.testcase,
        _notReadOption = { read: false };

    var _es6ShimJs = gulp.src(_libs.ES6_SHIM_JS, _notReadOption),
        _rxJs = gulp.src(_libs.RX_JS, _notReadOption),
        _angularPolyfillJs = gulp.src(_libs.ANGULAR_02_POLYFILLS_JS, _notReadOption),
        _angularJs = gulp.src(_libs.ANGULAR_02_JS, _notReadOption),
        _ngxBootstrapCss = gulp.src(_fileService.FILES.NGX_BOOTSTRAP_CSS, _notReadOption);

    var _bootstrapCss = gulp.src(_libs.BOOTSTRAP_04_CSS, _notReadOption);

    var _testUI;
    
    var themes = ['material', 'bootstrap4'];
    
    if (_componentName) {
      _testUI = gulp.src(_fileService.getComponentTestCaseBoot(_componentName, _testCase))
    } else if (_directiveName) {
      _testUI = gulp.src(_fileService.getDirectiveTestCaseBoot(_directiveName, _testCase))
    }
    
    _themeName = _themeName || 'bootstrap4';
    
    injectTemplateStyle(_componentName, _themeName);
    
    _testUI.pipe(webpack(require('./../webpack.config.js')))
          .pipe(rename('ngx-bootstrap-test-ui.js'))
          .pipe(gulp.dest(''));
      
    var ngxBootstrap = gulp.src('ngx-bootstrap-test-ui.js', _notReadOption);

    return gulp.src(_fileService.FILES.INDEX_TEMPLATE_HTML)
                .pipe(inject(_streamSeries(ngxBootstrap), { relative: true, name: 'component' }))
                .pipe(inject(_streamSeries
                  (
                    _es6ShimJs, _rxJs, _angularPolyfillJs, _angularJs,
                    _bootstrapCss, _ngxBootstrapCss
                  ),
                  { relative: true, name: 'core' }
                ))
                .pipe(rename(_fileService.FILES.INDEX_HTML.replace(_fileService.PATHS.ROOT, '')))
                .pipe(gulp.dest(_fileService.PATHS.ROOT));
  };
};


function injectTemplateStyle(component, theme) {
  var componentPath = './components/' + component + '/' + component + '.component.js';
  var componentDistPath = './components/' + component + '/';
  
  var templatePath = function(component, theme) {
    return './components/' + component + '/templates/' + component + '.' + theme + '.html';
  }
  var stylePath = function(component, theme) {
    return './components/' + component + '/css/' + component + '.' + theme + '.css';
  }
  
  var injectTemplateKey = '/*Inject template at here*/';
  var injectStyleKey = '/*Inject style at here*/';
  
  var insertTemplate = function(component, theme) {
    var contents = fs.readFileSync(templatePath(component, theme), 'utf8');

    return 'template: "' + jsStringEscape(contents) + '",';
  }
  var insertStyle = function(component, theme) {
    var contents = fs.readFileSync(stylePath(component, theme), 'utf8').replace(/[\r\n]+/g, ' ').replace(/  +/g, ' ');

    return 'styles: `' + contents + '`,';
  }
  
  var styleTheme = stylePath(component, theme);
  var templateTheme = templatePath(component, theme);
  
  if (fs.existsSync(styleTheme) && fs.existsSync(templateTheme)) {
    gulp.src(componentPath)
      .pipe(insert.transform(function(contents, file) {
        return contents
          .replace(injectTemplateKey, insertTemplate(component, theme))
          .replace(injectStyleKey, insertStyle(component, theme));
      }))
      .pipe(rename( component + '.component.' + theme + '.js' ))
      .pipe(gulp.dest(componentDistPath));
    
  } else {
    console.log("Don't have css and template");
  }
}