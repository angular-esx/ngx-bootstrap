var ngx = require('ngx');
var ngxGroupComponent = require('./group.component.js');

ngx.group = {
  groupComponent: ngxGroupComponent,
  DIRECTIVES: [ ngxGroupComponent ]
};

module.exports = ngx;