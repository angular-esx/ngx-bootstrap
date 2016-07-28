var ngxHide = require('./hide.directive.js');

module.exports = {
  hideUpDirective: ngxHide.hideUpDirective,
  hideDownDirective: ngxHide.hideDownDirective,
  HIDE_DIRECTIVES: [
    ngxHide.hideUpDirective,
    ngxHide.hideDownDirective
  ]
};