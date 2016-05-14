var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

module.exports = function (params) {
  return function () {
    var _componentName = params.args.component,
        _themeName = params.args.theme;
    
    if (_componentName) {
      _themeName = _themeName || 'bootstrap4';
        
      return gulp.src('./components/' + _componentName + '/scss/' + _componentName + '.' + _themeName + '.scss')
        .pipe(_reload({stream:true}))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./components/' + _componentName + '/css/'));
        
    } else {
      return gulp.src('./scss/ngx-bootstrap.scss')
        .pipe(_reload({stream:true}))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('ngx-bootstrap.min.css'))
        .pipe(gulp.dest('./dist/css/'));
        
    }
    
  };
};