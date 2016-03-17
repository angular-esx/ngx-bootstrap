module.exports = function(params) {
  return function() {
    var _gulp = params.gulp,
      _watch = params.plugins.watch;

    _gulp.watch([
      './components/**/*.js',
      './cores/**/*.js',
      './ngx-bootstrap.js',
      './ngx-bootstrap.utils.js'
    ], ['lint']);

    _gulp.watch('./scss/**/*.scss', ['sass']);
  };
};
