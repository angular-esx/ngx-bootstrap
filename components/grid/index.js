var ngxGridComponent = require('./grid.component.js');
var ngxGridRowDirective = require('./grid-row.directive.js');
var ngxGridColumnDirective = require('./grid-column.directive.js');

module.exports = {
  gridComponent: ngxGridComponent,
  gridRowDirective: ngxGridRowDirective,
  gridColumnDirective: ngxGridColumnDirective,
  GRID_DIRECTIVES: [
    ngxGridComponent,
    ngxGridRowDirective,
    ngxGridColumnDirective
  ]
};
