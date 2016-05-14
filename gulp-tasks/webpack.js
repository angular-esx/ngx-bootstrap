module.exports = function(params) {
  return function() {
    var _gulp = params.gulp,
      _rename = params.plugins.rename,
      _webpack = require('webpack-stream'),
      _fileService = params.fileService,
      _componentName = params.args.component,
      _directiveName = params.args.directive,
      _testCase = params.args.testcase,
      _notReadOption = { read: false };
      
    var _testUI;
    if (_componentName) {
      _testUI = _gulp.src(_fileService.getComponentTestCaseBoot(_componentName, _testCase));
    }
    else if (_directiveName) {
      _testUI = _gulp.src(_fileService.getDirectiveTestCaseBoot(_directiveName, _testCase))
    }

    return _testUI.pipe(_webpack( require('./../webpack.config.js') ))
                  .pipe(_rename('ngx-bootstrap-test-ui.js'))
                  .pipe(_gulp.dest(''));
  };
};