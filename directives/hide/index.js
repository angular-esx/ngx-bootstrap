var ngxBootstrap = require('ngxBootstrap');
var ngxHideDirective = require('./hide.directive.js');

ngxBootstrap.hide = {
  HIDE_DIRECTIVE: ngxHideDirective,
  DIRECTIVES: [ ngxHideDirective ]
};

module.exports = ngxBootstrap;