var fs = require('fs');
var gulp = require('gulp');
var insert = require('gulp-insert');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var jsStringEscape = require('js-string-escape');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');

module.exports = function(params) {
  return function() {
    
    var _fileService = params.fileService,
      _componentName = params.args.component,
      _themeName = params.args.theme,
      _directiveName = params.args.directive,
      _testCase = params.args.testcase;
    
    _themeName = _themeName || 'bootstrap4';
      
    var _testUI, webpackConfig;
    
    if (_componentName) {
      _testUI = gulp.src(_fileService.getComponentTestCaseBoot(_componentName, _testCase));
    }
    else if (_directiveName) {
      _testUI = gulp.src(_fileService.getDirectiveTestCaseBoot(_directiveName, _testCase));
    }
    
    injectTemplateStyle(_componentName, _themeName);
    
    var _componentThemeName = _componentName + '.component.' + _themeName + '.js';
    
    webpackConfig = {
      context: __dirname,
      output: {
        path: __dirname,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'ngxBootstrap',
      },
      plugins: [
        new webpack.DefinePlugin({
          __COMPONENT_FILE__: JSON.stringify(_componentThemeName),
        })
      ]
    };
    
    return _testUI.pipe(webpackStream(webpackConfig))
      .pipe(rename('ngx-bootstrap-test-ui.js'))
      .pipe(gulp.dest(''));
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

    return "template: '" + jsStringEscape(contents) + "',";
  }
  var insertStyle = function(component, theme) {
    var contents = fs.readFileSync(stylePath(component, theme), 'utf8')
      .replace(/[\r\n]+/g, ' ')
      .replace(/  +/g, ' ');
    
    return "styles: ['" + contents + "'],";
  }
  
  var styleTheme = stylePath(component, theme);
  var templateTheme = templatePath(component, theme);
  
  if (fs.existsSync(styleTheme) || fs.existsSync(templateTheme)) {
    gulp.src(componentPath)
      .pipe(insert.transform(function(contents, file) {
        if( fs.existsSync(styleTheme) ) {
          contents = contents.replace(injectTemplateKey, insertTemplate(component, theme))
        }
        
        if (fs.existsSync(templateTheme)) {
          contents = contents.replace(injectStyleKey, insertStyle(component, theme));
        }
        
        return contents;
      }))
      .pipe(rename( component + '.component.' + theme + '.js' ))
      .pipe(gulp.dest(componentDistPath));
    
  } else {
    console.log("Don't have css or template");
  }
}