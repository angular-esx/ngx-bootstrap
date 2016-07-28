var ngxCollapseComponent = require('./collapse.component.js');
var ngxToggleCollapseDirective = require('./toggle-collapse.directive.js');
var ngxCollapseService = require('./services/collapse.service.js');

module.exports = {
  collapseComponent: ngxCollapseComponent,
  toggleCollapseDirective: ngxToggleCollapseDirective,
  collapseService: ngxCollapseService,
  COLLAPSE_DIRECTIVES: [
    ngxCollapseComponent,
    ngxToggleCollapseDirective
  ],
  COLLAPSE_PROVIDERS: [ngxCollapseService]
};