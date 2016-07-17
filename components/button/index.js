var ngx = require('ngx');
var ngxButtonComponent = require('./button.component.js');

ngx.button = {
  buttonComponent: ngxButtonComponent,
  DIRECTIVES: [ ngxButtonComponent ]
};

module.exports = ngx;