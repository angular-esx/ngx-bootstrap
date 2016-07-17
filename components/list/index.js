var ngx = require('ngx');
var ngxListComponent = require('./list.component.js');
var ngxListItemComponent = require('./list-item.component.js');

ngx.list = {
  listComponent: ngxListComponent,
  listItemComponent: ngxListItemComponent,
  DIRECTIVES: [
    ngxListComponent,
    ngxListItemComponent
  ]
};

module.exports = ngx;