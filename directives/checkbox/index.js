var ngxBootstrap = require('ngxBootstrap');
var ngxCheckboxDirective = require('./checkbox.directive.js');
var ngxCheckboxGroupDirective = require('./checkbox-group.directive.js');

ngxBootstrap.checkbox = {
  CHECKBOX_DIRECTIVE: ngxCheckboxDirective,
  CHECKBOX_GROUP_DIRECTIVE: ngxCheckboxGroupDirective,
  DIRECTIVES: [ 
    ngxCheckboxDirective, 
    ngxCheckboxGroupDirective 
  ]
};

module.exports = ngxBootstrap;
