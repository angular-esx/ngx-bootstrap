var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var fs = require('fs');
var merge = require('merge-stream');

var args = require('yargs').argv;
var componentName = args.component;

module.exports = function (params) {
  return function () {
    var contents = addSCSS('./cores/scss/ngx-bootstrap.scss');

    if (componentName) {
      contents += getDirectiveSCSSPath(componentName);

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
          contents += getDirectiveSCSSPath(component);
        });
    }

    try {
      fs.mkdirSync('./temp');
    } catch (e) {
      if (e.code != 'EEXIST') throw e;
    }

    try {
      fs.writeFileSync('./temp/ngx-bootstrap.scss', contents, { encoding: 'utf8' });
    } catch (e) {
      throw e;
    }

    return merge(
      gulp.src('./cores/scss/normalize/normalize.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(rename('ngx-normalize.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('ngx-normalize.min.css'))
        .pipe(gulp.dest('./dist/css/')),
      gulp.src('./temp/ngx-bootstrap.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('ngx-bootstrap.min.css'))
        .pipe(gulp.dest('./dist/css/')));

  };
};

function addSCSS(scssFile) {
  return "@import " + '"' + scssFile + '";' + "\n";
}

function getDirectiveSCSSPath(componentName) {
  var contents = '';
  var data = fs.readdirSync('./components/' + componentName)
    .filter(function (directive) {
      return directive.match(/directive.js$/g);
    }).map(function (directive) {
      return './components/' + componentName + '/scss/' + directive.replace('.directive.js', '') + '.scss';
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