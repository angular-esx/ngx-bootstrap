var ngx = require('ngx');
var ngxHideDirectives = require('./hide.directive.js');

ngx.hide = {
  hideUpDirective: ngxHideDirectives.hideUp,
  hideDownDirective: ngxHideDirectives.hideDown,
  DIRECTIVES: [ngxHideDirectives.hideUp, ngxHideDirectives.hideDown]
};

module.exports = ngx;