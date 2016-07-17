var ngx = require('ngx');
var ngxPagerComponent = require('./pager.component.js');

ngx.pager = {
  pagerComponent: ngxPagerComponent,
  DIRECTIVES: [ ngxPagerComponent ]
};

module.exports = ngx;