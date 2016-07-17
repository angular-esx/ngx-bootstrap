var ngx = require('ngx');
var ngxBreadcrumbComponent = require('./breadcrumb.component.js');
var ngxBreadcrumbItemDirective = require('./breadcrumb-item.directive.js');

ngx.breadcrumb = {
  breadcrumbComponent: ngxBreadcrumbComponent,
  breadcrumbItemDirective: ngxBreadcrumbItemDirective,
  DIRECTIVES: [
    ngxBreadcrumbComponent,
    ngxBreadcrumbItemDirective
  ]
};

module.exports = ngx;