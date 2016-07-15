var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

module.exports = function (params) {
  return function () {
    var _componentName = params.args.component;

    return gulp.src('./components/' + _componentName + '/themes/bootstrap/scss/' + _componentName + '.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(rename(_componentName + '.bootstrap4.css'))
        .pipe(gulp.dest('./components/' + _componentName + '/css/'));

  };
};