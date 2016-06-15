var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function (params) {
  return function () {
    
    var _themeName = params.args.theme || 'bootstrap';

    gulp.watch([
      './components/**/*.js',
      '!./components/**/*.' + _themeName + '.js',
      './directives/**/*.js',
      './cores/**/*.js',
      './ngx-bootstrap.js',
      './ngx-bootstrap.utils.js',
    ], function () {
      runSequence('lint', 'webpack', 'clean-scripts');
    });

    gulp.watch([
      './components/**/*.html',
      './directives/**/*.html',
    ], function () {
      runSequence('webpack', 'clean-scripts');
    });

    gulp.watch([
      './components/**/*.scss',
      './scss/**/*.scss',
      './cores/scss/**/*.scss'
    ], function () {
      runSequence('scss', 'webpack', 'clean-scripts');
    });
  };
};
