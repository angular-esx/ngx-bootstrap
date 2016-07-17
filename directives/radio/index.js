var ngx = require('ngx');
var ngxRadioDirective = require('./radio.directive.js');
var ngxRadioGroupDirective = require('./radio-group.directive.js');

ngx.radio = {
  radioDirective: ngxRadioDirective,
  radioGroupDirective: ngxRadioGroupDirective,
  DIRECTIVES: [ 
    ngxRadioDirective, 
    ngxRadioGroupDirective 
  ]
};

module.exports = ngx;