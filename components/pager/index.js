var ngxBootstrap = require('ngxBootstrap');
var ngxPagerComponent = require('./pager.component.js');

ngxBootstrap.pager = {
  PAGER_COMPONENT: ngxPagerComponent,
  DIRECTIVES: [ ngxPagerComponent ]
};

module.exports = ngxBootstrap;