var ngx = require('ngx');
var ngxCollapseComponent = require('./collapse.component.js');
var ngxToggleCollapseDirective = require('./toggle-collapse.directive.js');
var ngxCollapseService = require('./services/collapse.service.js');

ngx.collapse = {
  collapseComponent: ngxCollapseComponent,
  toggleCollapseDirective: ngxToggleCollapseDirective,
  collapseService: ngxCollapseService,
  DIRECTIVES: [
    ngxCollapseComponent,
    ngxToggleCollapseDirective
  ],
  PROVIDERS: [ ngxCollapseService ]
};

module.exports = ngx;