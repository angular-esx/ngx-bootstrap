var ngxBootstrap = require('ngxBootstrap');
var ngxGridComponent = require('./grid.component.js');
var ngxGridRowDirective = require('./grid-row.directive.js');
var ngxGridColumnDirective = require('./grid-column.directive.js');

ngxBootstrap.grid = {
  GRID_COMPONENT: ngxGridComponent,
  GRID_ROW_DIRECTIVE: ngxGridRowDirective,
  GRID_COLUMN_DIRECTIVE: ngxGridColumnDirective,
  DIRECTIVES: [
    ngxGridComponent,
    ngxGridRowDirective,
    ngxGridColumnDirective
  ]
};

module.exports = ngxBootstrap;