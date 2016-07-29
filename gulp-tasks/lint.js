var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');

module.exports = function (params) {
  return function () {

    return gulp
      .src([
        './components/**/*.js',
        './configs/**/*.js',
        './cores/**/*.js',
        './directives/**/*.js',
        './gulp-tasks/**/*.js',
        './gulpfile.js',
      ])
      .pipe(jshint())
      .pipe(jshint.reporter(jshintStylish));
  };
};
