var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var reload = require('browser-sync').reload;
var fs = require('fs');

var args = require('yargs').argv;
var componentName = args.component;
var themeName = args.theme || 'bootstrap';

module.exports = function (params) {
  return function () {

    var CORE_SASS = './cores/scss/ngx-bootstrap.' + themeName + '.scss';
    var contents = addSCSS(CORE_SASS);
    if (componentName) {
      contents += getPathDirectiveSCSS(componentName);

    } else {
      fs.readdirSync('./components')
        .filter(function (component) {
          try {
            return fs.statSync('./components/' + component).isDirectory();
          } catch (e) {
            return false;
          }
        })
        .forEach(function (component) {
          contents += getPathDirectiveSCSS(component);
        });
    }

    fs.writeFileSync('./scss/ngx-bootstrap.scss', contents, { encoding: 'utf8' });

    return gulp.src('./scss/ngx-bootstrap.scss')

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

function getPathDirectiveSCSS(componentName) {
  var contents = '';
  var data = fs.readdirSync('./components/' + componentName)
    .filter(function (directive) {
      return directive.match(/directive.js$/g);
    }).map(function (directive) {
      return './components/' + componentName + '/themes/' + themeName + '/scss/' + directive.replace('.directive.js', '') + '.scss';
    }).filter(function (directive) {
      try {
        var stats = fs.statSync(directive);
        return stats.isFile();
      } catch (e) {
        return false;
      }
    }).forEach(function (scss) {
      contents += addSCSS(scss);
    });

  return contents;
}