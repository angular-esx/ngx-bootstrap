var gulp = require('gulp');
var runSequence = require('run-sequence');


module.exports = function (params) {
  return function () {

    gulp.watch([
      './components/**/*.js',
      './directives/**/*.js',
      './cores/**/*.js',
      './ngx-bootstrap.js',
      './ngx-bootstrap.utils.js',
    ], function () {
      runSequence('lint', 'webpack');
    });

    gulp.watch([
      './components/**/*.html',
      './directives/**/*.html',
    ], function () {
      runSequence('webpack');
    });

    gulp.watch([
      './components/**/*.scss',
      './scss/**/*.scss',
      './cores/scss/**/*.scss'
    ], function () {
      runSequence('scss', 'webpack');
    });
  };
};
