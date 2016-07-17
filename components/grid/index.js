var ngx = require('ngx');
var ngxGridComponent = require('./grid.component.js');
var ngxGridRowDirective = require('./grid-row.directive.js');
var ngxGridColumnDirective = require('./grid-column.directive.js');

ngx.grid = {
  gridComponent: ngxGridComponent,
  gridRowDirective: ngxGridRowDirective,
  gridColumnDirective: ngxGridColumnDirective,
  DIRECTIVES: [
    ngxGridComponent,
    ngxGridRowDirective,
    ngxGridColumnDirective
  ]
};

module.exports = ngx;