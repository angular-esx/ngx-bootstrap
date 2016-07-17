var ngx = require('ngx');
var ngxCheckboxDirective = require('./checkbox.directive.js');
var ngxCheckboxGroupDirective = require('./checkbox-group.directive.js');

ngx.checkbox = {
  checkboxDirective: ngxCheckboxDirective,
  checkboxGroupDirective: ngxCheckboxGroupDirective,
  DIRECTIVES: [ 
    ngxCheckboxDirective, 
    ngxCheckboxGroupDirective 
  ]
};

module.exports = ngx;
