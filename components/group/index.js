var ngxBootstrap = require('ngxBootstrap');
var ngxGroupComponent = require('./group.component.js');

ngxBootstrap.group = {
  GROUP_COMPONENT: ngxGroupComponent,
  DIRECTIVES: [ ngxGroupComponent ]
};

module.exports = ngxBootstrap;