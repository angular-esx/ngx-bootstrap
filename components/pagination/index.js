var ngxBootstrap = require('ngxBootstrap');
var ngxPaginationComponent = require('./pagination.component.js');

ngxBootstrap.pagination = {
  PAGINATION_COMPONENT: ngxPaginationComponent,
  DIRECTIVES: [ ngxPaginationComponent ]
};

module.exports = ngxBootstrap;