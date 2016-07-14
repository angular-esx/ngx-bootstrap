var ngxBootstrap = require('ngxBootstrap');
var ngxCollapseComponent = require('./collapse.component.js');
var ngxToggleCollapseDirective = require('./toggle-collapse.directive.js');
var ngxCollapseService = require('./services/collapse.service.js');

ngxBootstrap.collapse = {
  COLLAPSE_COMPONENT: ngxCollapseComponent,
  TOGGLE_COLLAPSE_DIRECTIVE: ngxToggleCollapseDirective,
  COLLAPSE_SERVICE: ngxCollapseService,
  DIRECTIVES: [
    ngxCollapseComponent,
    ngxToggleCollapseDirective
  ],
  SERVICES: [ ngxCollapseService ]
};

module.exports = ngxBootstrap;