var ngx = require('ngx');
var ngxTabsComponent = require('./tabs.component.js');
var ngxTabDirective = require('./tab.directive.js');
var ngxTabHeaderDirective = require('./tab-header.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');
var ngxTabsService = require('./services/tabs.service.js');

ngx.tabs = {
  tabsComponent: ngxTabsComponent,
  tabDirective: ngxTabDirective,
  tabHeaderDirective: ngxTabHeaderDirective,
  tabContentDirective: ngxTabContentDirective,
  tabsService: ngxTabsService,
  DIRECTIVES: [
    ngxTabsComponent,
    ngxTabDirective,
    ngxTabHeaderDirective,
    ngxTabContentDirective
  ],
  PROVIDERS: [ ngxTabsService ] 
};

module.exports = ngx;