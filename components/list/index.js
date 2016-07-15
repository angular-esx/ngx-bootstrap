var ngxBootstrap = require('ngxBootstrap');
var ngxListComponent = require('./list.component.js');
var ngxListItemComponent = require('./list-item.component.js');

ngxBootstrap.list = {
  LIST_COMPONENT: ngxListComponent,
  LIST_ITEM_COMPONENT: ngxListItemComponent,
  DIRECTIVES: [
    ngxListComponent,
    ngxListItemComponent
  ]
};

module.exports = ngxBootstrap;