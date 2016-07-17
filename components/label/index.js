var ngx = require('ngx');
var ngxLabelComponent = require('./label.component.js');

ngx.label = {
  labelComponent: ngxLabelComponent,
  DIRECTIVES: [ ngxLabelComponent ]
};

 module.exports = ngx;