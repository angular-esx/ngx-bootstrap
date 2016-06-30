var NGX_TABS = require('components/tabs/index.js');
var NGX_LINK = require('components/link/index.js');
var NGX_CORE_SERVICES = require('coreService');
var ngxBootstrap = require('utils');

function _testCase() {
  this.constructor = [NGX_TABS.SERVICE, function (ngxTabsService) {
    this.ngxTabsService = ngxTabsService;

    this.tabs = [
      { id: 'tab03', head: 'Tab 03', content: 'this is content of tab 03' },
      { id: 'tab04', head: 'Tab 04', content: 'this is content of tab 04' }
    ];

    this.pillTabs = [
      { id: 'tab03', head: 'Tab 03', content: 'this is content of tab 03' },
      { id: 'tab04', head: 'Tab 04', content: 'this is content of tab 04' }
    ];
  }];

  this.removeTab = function (tab) {
    ngxBootstrap.splice(this.tabs, tab);
  };

  this.removePillTab = function (tab) {
    ngxBootstrap.splice(this.pillTabs, tab);
  };

  this.selectTab = function (tab) {
    this.ngxTabsService.select(tab);
  };

  this.changedTab = function (event) {
    //alert('changed to tab ' + event.target.id);
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tabs/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LINK.DIRECTIVES,
    NGX_TABS.DIRECTIVES
  ],
  providers: [
    NGX_CORE_SERVICES,
    NGX_LINK.SERVICE,
    NGX_TABS.SERVICE
  ]
})
.Class(new _testCase());