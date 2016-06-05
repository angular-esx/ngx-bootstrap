var fs = require('fs');
var gulp = require('gulp');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var jsStringEscape = require('js-string-escape');

module.exports = function (params) {
  return function () {
        _componentName = params.args.component,
        _themeName = params.args.theme;
    
    var themes = ['material', 'bootstrap4'];
    
    if (_themeName == undefined) {
      themes.map(function(theme){
        injectTemplateStyle(_componentName, theme);
      });
    } else {
      injectTemplateStyle(_componentName, _themeName);
    }
  };
};

function injectTemplateStyle(component, theme) {
  var componentPath = './components/' + component + '/' + component + '.component.js';
  var componentDistPath = './components/' + component + '/';
  
  var templatePath = function(component, theme) {
    return './components/' + component + '/templates/' + component + '.' + theme + '.html';
  }
  var stylePath = function(component, theme) {
    return './components/' + component + '/css/' + component + '.' + theme + '.css';
  }
  
  var injectTemplateKey = '/*Inject template at here*/';
  var injectStyleKey = '/*Inject style at here*/';
  
  var insertTemplate = function(component, theme) {
    var contents = fs.readFileSync(templatePath(component, theme), 'utf8');

    return 'template: "' + jsStringEscape(contents) + '",';
  }
  var insertStyle = function(component, theme) {
    var contents = fs.readFileSync(stylePath(component, theme), 'utf8');

    return 'styles: `' + contents + '`,';
  }
  
  var styleTheme = stylePath(component, theme);
  var templateTheme = templatePath(component, theme);
  
  if (fs.existsSync(styleTheme) && fs.existsSync(templateTheme)) {
    gulp.src(componentPath)
      .pipe(insert.transform(function(contents, file) {
        return contents
          .replace(injectTemplateKey, insertTemplate(component, theme))
          .replace(injectStyleKey, insertStyle(component, theme));
      }))
      .pipe(rename( component + '.component.' + theme + '.js' ))
      .pipe(gulp.dest(componentDistPath));
    
  } else {
    console.log("Don't have css and template");
  }
}