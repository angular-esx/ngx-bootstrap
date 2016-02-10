﻿module.exports = function (params) {
  return function () {
    var _gulp = params.gulp,
        _streamSeries = params.plugins.streamSeries,
        _inject = params.plugins.inject,
        _fileService = params.fileService,
        _libs = _fileService.LIBRARIES,
        _componentName = params.args.component,
        _testCase = params.args.testcase,
        _notReadOption = { read: false };

    var _es6ShimJs = _gulp.src(_libs.ES6_SHIM_JS, _notReadOption),
        _rxJs = _gulp.src(_libs.RX_JS, _notReadOption),
        _angularPolyfillJs = _gulp.src(_libs.ANGULAR_02_POLYFILLS_JS, _notReadOption),
        _angularJs = _gulp.src(_libs.ANGULAR_02_JS, _notReadOption),
        _ngxBootstrapJs = _gulp.src(_fileService.FILES.NGX_BOOTSTRAP_JS, _notReadOption);

    var _bootstrapCss = _gulp.src(_libs.BOOTSTRAP_04_CSS, _notReadOption);

    var _orderedDependencies = _gulp.src(_getOrderedDependencies(_fileService), _notReadOption),
        _testCaseJs = _gulp.src(_fileService.getTestCaseJS(_componentName, _testCase), _notReadOption),
        _testCaseBootJs = _gulp.src(_fileService.getTestCaseBoot(_componentName, _testCase), _notReadOption);

    return _gulp.src(_fileService.FILES.INDEX_HTML)
            .pipe(_inject(_streamSeries(_orderedDependencies, _testCaseJs, _testCaseBootJs), { relative: true, name: 'component' }))
            .pipe(_inject(_streamSeries(_es6ShimJs, _rxJs, _angularPolyfillJs, _angularJs, _ngxBootstrapJs, _bootstrapCss), { relative: true, name: 'core' }))
            .pipe(_gulp.dest(_fileService.PATHS.ROOT));
  };

  function _getOrderedDependencies(fileService) {
    var _fileStream = require('fs'),
        _componentInfos = _readJsonFile(fileService.FILES.COMPONENTS_INFO_JSON),
        _result = [];
    for (var prop in _componentInfos) {
      _result.push(fileService.PATHS.COMPONENTS + prop + '.js');
    }

    return _result;

    function _readJsonFile(filePath) {
      return JSON.parse(_fileStream.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
    };
  };
};