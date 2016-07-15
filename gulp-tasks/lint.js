var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var args = require('yargs').argv;
var theme = args.theme || 'bootstrap';

module.exports = function(params) {
  return function() {

    return gulp
      .src([
        './components/**/*.js',
        '!./components/**/*.' + theme + '.js',
        './cores/**/*.js',
        './ngx-bootstrap.js',
        './ngx-bootstrap.utils.js'
      ])
      .pipe(jshint())
      .pipe(jshint.reporter(jshintStylish));
  };
};
