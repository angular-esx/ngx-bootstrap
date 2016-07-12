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
      bootTestScript, testCaseScript;

    var _es6ShimJs = gulp.src(_libs.ES6_SHIM_JS, _notReadOption),
      _rxJs = gulp.src(_libs.RX_JS, _notReadOption),

      _angularPolyfillJs = gulp.src(_libs.ANGULAR_02_POLYFILLS_JS, _notReadOption),
      _angularJs = gulp.src(_libs.ANGULAR_02_JS, _notReadOption),
      _ngxBootstrapCss = gulp.src(_fileService.FILES.NGX_BOOTSTRAP_CSS, _notReadOption);

    if (_componentName || _directiveName) {
      if (_componentName) {
        testCaseScript = gulp.src(_fileService.getComponentTestCase(_componentName, _testCase), _notReadOption);
        bootTestScript = gulp.src(_fileService.getComponentTestBoot(_componentName, _testCase), _notReadOption);
      } else if (_directiveName) {
        testCaseScript = gulp.src(_fileService.getDirectiveTestCase(_componentName, _testCase), _notReadOption);
        bootTestScript = gulp.src(_fileService.getDirectiveTestBoot(_directiveName, _testCase), _notReadOption);
      }
    }

    var ngxCore = gulp.src('./dist/js/ngx.core.js', _notReadOption);
    var ngxComponent = gulp.src('./dist/js/ngx.' + _componentName + '.js', _notReadOption);
    var ngxBootstrap = gulp.src('./dist/js/ngx-bootstrap.js', _notReadOption);

    return gulp.src(_fileService.FILES.INDEX_TEMPLATE_HTML)
      .pipe(inject(_streamSeries(ngxBootstrap, ngxCore, ngxComponent, testCaseScript, bootTestScript), { relative: true, name: 'component' }))
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