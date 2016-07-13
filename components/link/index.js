var ngxBootstrap = require('ngxBootstrap');
var linkComponent = require('./link.component.js');

ngxBootstrap.link = {
  LINK_COMPONENT: linkComponent,
  DIRECTIVES: [ linkComponent ]
};

module.exports = ngxBootstrap;