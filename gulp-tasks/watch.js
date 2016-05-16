var gulp = require('gulp');

module.exports = function(params) {
  return function() {

    gulp.watch([
      './components/**/*.js',
      './cores/**/*.js',
      './ngx-bootstrap.js',
      './ngx-bootstrap.utils.js',
    ], ['lint', 'webpack']);
    
    gulp.watch([
      './components/**/*.html',
    ], ['webpack']);

    gulp.watch([
      './components/**/*.scss',
      './scss/**/*.scss'
    ], ['scss', 'webpack']);
  };
};
