var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var reload = require('browser-sync').reload;
var fs = require('fs');

module.exports = function (params) {
  return function () {
    var _componentName = params.args.component,
      _themeName = params.args.theme || 'bootstrap4';
    
    var CORE_SASS = './cores/scss/ngx-bootstrap.' + _themeName + '.scss';
    var contents = addSCSS(CORE_SASS);
    
    if (_componentName) {
      
      var scssPath = fs.readdirSync('./components/' + _componentName)
        .filter(function (directive) {
          return directive.match(/directive.js$/g);
        }).map(function (directive) {
          var directiveName = directive.replace('.directive.js', '');
          return './components/' + _componentName + '/scss/' + directive.replace('.directive.js', '') + '.' + _themeName + '.scss';
        }).filter(function (directive) {
          try {
            var stats = fs.statSync(directive);
            return stats.isFile();
          } catch (e) {
            return false;
          }
        }).forEach(function(scss){
          contents += addSCSS(scss);
          fs.writeFileSync('./scss/ngx-bootstrap.scss', contents, {encoding: 'utf8'});
        })
        ;
      
      gulp.src('./components/' + _componentName + '/scss/' + _componentName + '.' + _themeName + '.scss')
        .pipe(reload({ stream: true }))
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./components/' + _componentName + '/css/'));

    } else {
      

    }
    
    return gulp.src('./scss/ngx-bootstrap.scss')
        .pipe(reload({ stream: true }))
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('ngx-bootstrap.min.css'))
        .pipe(gulp.dest('./dist/css/'));

  };
};

function addSCSS(scssName) {
  return "@import " + '"' + scssName + '";' + "\n";
}