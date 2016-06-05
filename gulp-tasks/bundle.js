var fs = require('fs');
var gulp = require('gulp');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');

module.exports = function (params) {
  return function () {
        _componentName = params.args.component,
        _themeName = params.args.theme;
    
    var themes = ['material', 'bootstrap4'];
    
    if (_themeName == undefined) {
      themes.map(function(theme){
        bundleComponent(_componentName, theme);
      });
    } else {
      bundleComponent(_componentName, _themeName);
    }
  };
};

function bundleComponent(component, theme) {
  var componentPath = './components/' + component + '/' + component + '.component.' + theme + '.js';
  
  gulp.src(componentPath)
    .pipe(webpack( require('./../webpack.config.js') ))
    .pipe(rename( 'ngx-bootstrap.' + theme + '.js' ))
    .pipe(gulp.dest('./dist'))
    .pipe(rename( 'ngx-bootstrap.' + theme + '.min.js' ))
    .pipe(gulp.dest('./dist'));
}