var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../../../../cores/index.js');
var ngxUtil = ngxCore.utils;
var ngxLink = require('../../../../link/index.js');
var ngxTabs = require('../../../../tabs/index.js');

function _testCase() {
  this.constructor = [ngxTabs.tabsService, function (ngxTabsService) {
    this.ngxTabsService = ngxTabsService;

    this.tabs = [
      { id: 'tab03', header: 'Tab 03', content: 'this is content of tab 03' },
      { id: 'tab04', header: 'Tab 04', content: 'this is content of tab 04' }
    ];

    this.pillTabs = [
      { id: 'tab03', header: 'Tab 03', content: 'this is content of tab 03' },
      { id: 'tab04', header: 'Tab 04', content: 'this is content of tab 04' }
    ];
  }];

  this.removeTab = function (tab) {
    ngxUtil.splice(this.tabs, tab);
  };

  this.removePillTab = function (tab) {
    ngxUtil.splice(this.pillTabs, tab);
  };

  this.selectTab = function (id) {
    this.ngxTabsService.select(id);
  };

  this.changedTab = function (event) {
    console.log('changed to tab ' + event.id);
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tabs/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLink.LINK_DIRECTIVES,
    ngxTabs.TABS_DIRECTIVES
  ],
  providers: [
    ngxCore.animationService,
    ngxTabs.TABS_PROVIDERS
  ]
})
.Class(new _testCase());