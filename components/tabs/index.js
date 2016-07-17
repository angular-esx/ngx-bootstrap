var ngx = require('ngx');
var ngxTabsComponent = require('./tabs.component.js');
var ngxTabDirective = require('./tab.directive.js');
var ngxTabHeadDirective = require('./tab-head.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');
var ngxTabsService = require('./services/tabs.service.js');

ngx.tabs = {
  tabsComponent: ngxTabsComponent,
  tabDirective: ngxTabDirective,
  tabHeadDirective: ngxTabHeadDirective,
  tabContentDirective: ngxTabContentDirective,
  tabsService: ngxTabsService,
  DIRECTIVES: [
    ngxTabsComponent,
    ngxTabDirective,
    ngxTabHeadDirective,
    ngxTabContentDirective
  ],
  PROVIDERS: [ ngxTabsService ] 
};

module.exports = ngx;