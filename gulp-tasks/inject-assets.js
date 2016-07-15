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
      _testCase = params.args.testcase,
      _componentName = params.args.component,
      _directiveName = params.args.directive,
      _notReadOption = { read: false },
      testScripts = [],
      bootTestScript, testCaseScripts, dependenceScript;

    var _es6ShimJs = gulp.src(_libs.ES6_SHIM_JS, _notReadOption),
      _rxJs = gulp.src(_libs.RX_JS, _notReadOption),

      _angularPolyfillJs = gulp.src(_libs.ANGULAR_02_POLYFILLS_JS, _notReadOption),
      _angularJs = gulp.src(_libs.ANGULAR_02_JS, _notReadOption),
      _ngxBootstrapCss = gulp.src(_fileService.FILES.NGX_BOOTSTRAP_CSS, _notReadOption);

    var ngxCore = gulp.src('./dist/js/ngx-core.js', _notReadOption);
    
    testScripts.push(ngxCore);

    if (_componentName || _directiveName) {
      if (_componentName) {
        testCaseScripts = _fileService.getComponentTestCase(_componentName, _testCase);
        testCaseScript = gulp.src(testCaseScripts.testCaseScript, _notReadOption);
        bootTestScript = gulp.src(testCaseScripts.bootScript, _notReadOption);
        
        try {
          dependenceScript = getDependencies(require('.' + testCaseScripts.dependenceScript));
        } catch (e) {
          dependenceScript = gulp.src('', _notReadOption);
        }

        var ngxComponent = gulp.src('./dist/js/ngx-' + _componentName + '.js', _notReadOption);

        testScripts.push(dependenceScript, ngxComponent);

      } else if (_directiveName) {
        testCaseScripts = _fileService.getDirectiveTestCase(_directiveName, _testCase);
        testCaseScript = gulp.src(testCaseScripts.testCaseScript, _notReadOption);
        bootTestScript = gulp.src(testCaseScripts.bootScript, _notReadOption);

        var ngxDirective = gulp.src('./dist/js/ngx-' + _directiveName + '.js', _notReadOption);

        try {
          dependenceScript = getDependencies(require('.' + testCaseScripts.dependenceScript));
        } catch (e) {
          dependenceScript = gulp.src('', _notReadOption);
        }

        testScripts.push(dependenceScript, ngxDirective);
      }
    }

    testScripts.push(testCaseScript, bootTestScript);

    return gulp.src(_fileService.FILES.INDEX_TEMPLATE_HTML)
      .pipe(inject(_streamSeries(testScripts), { relative: true, name: 'component' }))
      .pipe(inject(_streamSeries
        (
        _es6ShimJs, _rxJs, _angularPolyfillJs, _angularJs,
        _ngxBootstrapCss
        ),
        { relative: true, name: 'core' }
      ))
      .pipe(rename(_fileService.FILES.INDEX_HTML.replace(_fileService.PATHS.ROOT, '')))
      .pipe(gulp.dest(_fileService.PATHS.ROOT));
  };
};

function getDependencies(components) {
  return gulp.src(components.map(function (component) {
    return './dist/js/' + component + '.js';
  }), { read: false });
}