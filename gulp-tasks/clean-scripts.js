var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function (params) {
  return function () {
    var _themeName = params.args.theme || 'bootstrap4';

    return gulp
      .src([
        './components/**/*.' + _themeName + '.js',
      ])
      .pipe(clean());
  };
};
