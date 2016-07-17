var ngx = require('ngx');
var ngxLinkComponent = require('./link.component.js');

ngx.link = {
  linkComponent: ngxLinkComponent,
  DIRECTIVES: [ ngxLinkComponent ]
};

module.exports = ngx;