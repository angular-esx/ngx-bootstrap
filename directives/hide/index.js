var ngx = require('ngx');
var ngxHideDirective = require('./hide.directive.js');

ngx.hide = {
  hideDirective: ngxHideDirective,
  DIRECTIVES: [ ngxHideDirective ]
};

module.exports = ngx;