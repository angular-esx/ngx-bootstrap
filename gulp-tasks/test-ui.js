module.exports = function (params) {
  return function () {
    var _gulp = params.gulp,
        _streamSeries = params.plugins.streamSeries,
        _inject = params.plugins.inject,
        _rename = params.plugins.rename,
        _webpack = require('webpack-stream'),
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

    var _bootstrapCss = _gulp.src(_libs.BOOTSTRAP_04_CSS, _notReadOption);

    _gulp.src(_fileService.getTestCaseBoot(_componentName, _testCase))
      .pipe(_webpack( require('./../webpack.config.js') ))
      .pipe(_rename('ngx-bootstrap-test-ui.js'))
      .pipe(_gulp.dest(''));
      
    var ngxBootstrap = _gulp.src('ngx-bootstrap-test-ui.js', _notReadOption);

    return _gulp.src(_fileService.FILES.INDEX_TEMPLATE_HTML)
                .pipe(_inject(_streamSeries(ngxBootstrap), { relative: true, name: 'component' }))
                .pipe(_inject(_streamSeries
                  (
                    _es6ShimJs, _rxJs, _angularPolyfillJs, _angularJs,
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