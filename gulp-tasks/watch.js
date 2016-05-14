module.exports = function(params) {
  return function() {
    var _gulp = params.gulp,
      _watch = params.plugins.watch,
      _rename = params.plugins.rename,
      _webpack = require('webpack-stream'),
      _fileService = params.fileService,
      _componentName = params.args.component,
      _testCase = params.args.testcase,
      _notReadOption = { read: false };

    _gulp.watch([
      './components/**/*.js',
      './cores/**/*.js',
      './ngx-bootstrap.js',
      './ngx-bootstrap.utils.js',
      './components/**/*.sass',
      './components/**/*.scss',
      './components/**/*.html',    
    ], ['lint', 'webpack']);

    _gulp.watch('./scss/**/*.scss', ['sass', 'webpack']);
  };
};
