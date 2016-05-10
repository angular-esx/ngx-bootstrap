module.exports = function(params) {
  return function() {
    var _gulp = params.gulp,
      _rename = params.plugins.rename,
      _webpack = require('webpack-stream'),
      _fileService = params.fileService,
      _componentName = params.args.component,
      _testCase = params.args.testcase,
      _notReadOption = { read: false };
      
    return _gulp.src(_fileService.getTestCaseBoot(_componentName, _testCase))
      .pipe(_webpack( require('./../webpack.config.js') ))
      .pipe(_rename('ngx-bootstrap-test-ui.js'))
      .pipe(_gulp.dest(''));
  };
};