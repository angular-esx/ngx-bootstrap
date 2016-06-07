var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');

module.exports = function(params) {
  return function() {

    return gulp
      .src([
        './components/**/*.js',
        './cores/**/*.js',
        './ngx-bootstrap.js',
        './ngx-bootstrap.utils.js'
      ])
      .pipe(jshint())
      .pipe(jshint.reporter(jshintStylish));
  };
};
