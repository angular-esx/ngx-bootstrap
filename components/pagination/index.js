var ngx = require('ngx');
var ngxPaginationComponent = require('./pagination.component.js');

ngx.pagination = {
  paginationComponent: ngxPaginationComponent,
  DIRECTIVES: [ ngxPaginationComponent ]
};

module.exports = ngx;