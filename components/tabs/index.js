var ngxTabsComponent = require('./tabs.component.js');
var ngxTabDirective = require('./tab.directive.js');
var ngxTabHeaderDirective = require('./tab-header.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');
var ngxTabsService = require('./services/tabs.service.js');

module.exports = {
  tabsComponent: ngxTabsComponent,
  tabDirective: ngxTabDirective,
  tabHeaderDirective: ngxTabHeaderDirective,
  tabContentDirective: ngxTabContentDirective,
  tabsService: ngxTabsService,
  TABS_DIRECTIVES: [
    ngxTabsComponent,
    ngxTabDirective,
    ngxTabHeaderDirective,
    ngxTabContentDirective
  ],
  TABS_PROVIDERS: [ngxTabsService]
};