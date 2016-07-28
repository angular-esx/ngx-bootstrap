var ngxCheckboxDirective = require('./checkbox.directive.js');
var ngxCheckboxGroupDirective = require('./checkbox-group.directive.js');

module.exports = {
  checkboxDirective: ngxCheckboxDirective,
  checkboxGroupDirective: ngxCheckboxGroupDirective,
  CHECKBOX_DIRECTIVES: [
    ngxCheckboxDirective,
    ngxCheckboxGroupDirective
  ]
};
