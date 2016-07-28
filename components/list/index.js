var ngxListComponent = require('./list.component.js');
var ngxListItemComponent = require('./list-item.component.js');

module.exports = {
  listComponent: ngxListComponent,
  listItemComponent: ngxListItemComponent,
  LIST_DIRECTIVES: [
    ngxListComponent,
    ngxListItemComponent
  ]
};