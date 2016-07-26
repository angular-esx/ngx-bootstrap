﻿var fs = require('fs');
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
    
    var _es6ShamJs = gulp.src(_libs.ES6_SHAM_JS, _notReadOption),
      _es6ShimJs = gulp.src(_libs.ES6_SHIM_JS, _notReadOption),

      _zoneJs = gulp.src(_libs.ZONE_JS, _notReadOption);
      _reflectJs = gulp.src(_libs.REFLECT_JS, _notReadOption);
      _rxJs = gulp.src(_libs.RX_JS, _notReadOption);
      _coreAngularJs = gulp.src(_libs.CORE_ANGULAR_JS, _notReadOption);
      _commonAngularJs = gulp.src(_libs.COMMON_ANGULAR_JS, _notReadOption);
      _compilerAngularJs = gulp.src(_libs.COMPILER_ANGULAR_JS, _notReadOption);
      _platformBrowserAngularJs = gulp.src(_libs.PLATFORM_BROWSER_ANGULAR_JS, _notReadOption);
      _platformBrowserDynamicAngularJs = gulp.src(_libs.PLATFORM_BROWSER_DYNAMIC_ANGULAR_JS, _notReadOption);

      _ngxNormalizeCss = gulp.src(_fileService.FILES.NGX_NORMALIZE_CSS, _notReadOption),
      _ngxCss = gulp.src(_fileService.FILES.NGX_BOOTSTRAP_CSS, _notReadOption);

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
      .pipe(inject(_streamSeries(_es6ShamJs, _es6ShimJs), { relative: true, name: 'es11' }))    
      .pipe(inject(_streamSeries(testScripts), { relative: true, name: 'component' }))
      .pipe(inject(_streamSeries
        (
        _rxJs, _zoneJs, _reflectJs, _rxJs, _coreAngularJs, _commonAngularJs, _compilerAngularJs, _platformBrowserAngularJs, _platformBrowserDynamicAngularJs, 
        _ngxNormalizeCss, _ngxCss
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