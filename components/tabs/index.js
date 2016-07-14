var ngxBootstrap = require('ngxBootstrap');
var ngxTabsComponent = require('./tabs.component.js');
var ngxTabDirective = require('./tab.directive.js');
var ngxTabHeadDirective = require('./tab-head.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');
var ngxTabsService = require('./services/tabs.service.js');

ngxBootstrap.tabs = {
  TABS_COMPONENT: ngxTabsComponent,
  TAB_DIRECTIVE: ngxTabDirective,
  TAB_HEAD_DIRECTIVE: ngxTabHeadDirective,
  TAB_CONTENT_DIRECTIVE: ngxTabContentDirective,
  TABS_SERVICE: ngxTabsService,
  DIRECTIVES: [
    ngxTabsComponent,
    ngxTabDirective,
    ngxTabHeadDirective,
    ngxTabContentDirective
  ],
  SERVICES: [ ngxTabsService ] 
};

module.exports = ngxBootstrap;