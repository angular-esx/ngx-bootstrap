var ngxBreadcrumbComponent = require('./breadcrumb.component.js');
var ngxBreadcrumbItemDirective = require('./breadcrumb-item.directive.js');

module.exports = {
  breadcrumbComponent: ngxBreadcrumbComponent,
  breadcrumbItemDirective: ngxBreadcrumbItemDirective,
  BREADCRUMB_DIRECTIVES: [
    ngxBreadcrumbComponent,
    ngxBreadcrumbItemDirective
  ]
};