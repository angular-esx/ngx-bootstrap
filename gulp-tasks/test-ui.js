module.exports = function (params) {
  return function () {
    var _gulp = params.gulp,
        _streamSeries = params.plugins.streamSeries,
        _inject = params.plugins.inject,
        _rename = params.plugins.rename,
        _fileService = params.fileService,
        _libs = _fileService.LIBRARIES,
        _componentName = params.args.component,
        _testCase = params.args.testcase,
        _notReadOption = { read: false };

    var _es6ShimJs = _gulp.src(_libs.ES6_SHIM_JS, _notReadOption),
        _rxJs = _gulp.src(_libs.RX_JS, _notReadOption),
        _angularPolyfillJs = _gulp.src(_libs.ANGULAR_02_POLYFILLS_JS, _notReadOption),
        _angularJs = _gulp.src(_libs.ANGULAR_02_JS, _notReadOption),
        _ngxBootstrapCss = _gulp.src(_fileService.FILES.NGX_BOOTSTRAP_CSS, _notReadOption);
        _ngxBootstrapJs = _gulp.src(_fileService.FILES.NGX_BOOTSTRAP_JS, _notReadOption);
        _ngxBootstrapUtilsJs = _gulp.src(_fileService.FILES.NGX_BOOTSTRAP_UTILS_JS, _notReadOption);

    var _bootstrapCss = _gulp.src(_libs.BOOTSTRAP_04_CSS, _notReadOption);

    var _orderedCoreDependencies = _gulp.src(_getOrderedDependencies(_fileService.PATHS.CORES, _fileService.FILES.CORES_INFO_JSON), _notReadOption);

    var _orderedComponentDependencies = _gulp.src(_getOrderedDependencies(_fileService.PATHS.COMPONENTS, _fileService.FILES.COMPONENTS_INFO_JSON), _notReadOption),
        _testCaseJs = _gulp.src(_fileService.getTestCaseJS(_componentName, _testCase), _notReadOption),
        _testCaseBootJs = _gulp.src(_fileService.getTestCaseBoot(_componentName, _testCase), _notReadOption);

    return _gulp.src(_fileService.FILES.INDEX_TEMPLATE_HTML)
                .pipe(_inject(_streamSeries(_orderedComponentDependencies, _testCaseJs, _testCaseBootJs), { relative: true, name: 'component' }))
                .pipe(_inject(_streamSeries
                  (
                    _es6ShimJs, _rxJs, _angularPolyfillJs, _angularJs,
                    _ngxBootstrapJs, _ngxBootstrapUtilsJs, _orderedCoreDependencies,
                    _bootstrapCss, _ngxBootstrapCss
                  ),
                  { relative: true, name: 'core' }
                ))
                .pipe(_rename(_fileService.FILES.INDEX_HTML.replace(_fileService.PATHS.ROOT, '')))
                .pipe(_gulp.dest(_fileService.PATHS.ROOT));
  };

  function _getOrderedDependencies(rootFolder, outputFile) {
    var _fileStream = require('fs'),
        _Infos = _readJsonFile(outputFile),
        _result = [];
    for (var prop in _Infos) {
      _result.push(rootFolder + prop + '.js');
    }

    return _result;

    function _readJsonFile(filePath) {
      return JSON.parse(_fileStream.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
    };
  };
};