var ngxBootstrap = require('ngxBootstrap');
var ngxLinkComponent = require('./link.component.js');

ngxBootstrap.link = {
  LINK_COMPONENT: ngxLinkComponent,
  DIRECTIVES: [ ngxLinkComponent ]
};

module.exports = ngxBootstrap;