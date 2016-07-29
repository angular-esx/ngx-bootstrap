var gulp = require('gulp');
var runSequence = require('run-sequence');


module.exports = function (params) {
  return function () {

    gulp.watch([
      './components/**/*.js',
      './directives/**/*.js',
      './cores/**/*.js',
    ], function () {
      runSequence('lint', 'webpack');
      // runSequence('webpack');
    });

    gulp.watch([
      './components/**/*.html',
      './directives/**/*.html',
    ], function () {
      runSequence('webpack');
    });

    gulp.watch([
      './components/**/*.scss',
      './cores/**/*.scss'
    ], function () {
      runSequence('scss', 'webpack');
    });
  };
};
