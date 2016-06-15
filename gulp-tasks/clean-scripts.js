var gulp = require('gulp');
var clean = require('gulp-clean');

var args = require('yargs').argv;
var themeName = args.theme || 'bootstrap';

module.exports = function (params) {
  return function () {

    return gulp
      .src([
        './components/**/*.' + themeName + '.js',
      ])
      .pipe(clean());
  };
};
