var ngxBootstrap = require('ngxBootstrap');
var ngxBreadcrumbComponent = require('./breadcrumb.component.js');
var ngxBreadcrumbItemDirective = require('./breadcrumb-item.directive.js');

ngxBootstrap.breadcrumb = {
  BREADCRUMB_COMPONENT: ngxBreadcrumbComponent,
  BREADCRUMB_ITEM_DIRECTIVE: ngxBreadcrumbItemDirective,
  DIRECTIVES: [
    ngxBreadcrumbComponent,
    ngxBreadcrumbItemDirective
  ]
};

module.exports = ngxBootstrap;