function _testCase() {
  this.constructor = [ngx.tabs.tabsService, function (ngxTabsService) {
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
    ngx.splice(this.tabs, tab);
  };

  this.removePillTab = function (tab) {
    ngx.splice(this.pillTabs, tab);
  };

  this.selectTab = function (id) {
    this.ngxTabsService.select(id);
  };

  this.changedTab = function (event) {
    console.log('changed to tab ' + event.id);
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tabs/tests/ui/isolated-components/test-case.html',
  directives: [
    ngx.link.DIRECTIVES,
    ngx.tabs.DIRECTIVES
  ],
  providers: [
    ngx.tabs.PROVIDERS
  ]
})
.Class(new _testCase());