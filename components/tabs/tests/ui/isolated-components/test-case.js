function _testCase() {
  this.constructor = [ngxBootstrap.tabs.TABS_SERVICE, function (ngxTabsService) {
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
    ngxBootstrap.link.DIRECTIVES,
    ngxBootstrap.tabs.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService.ANIMATION_SERVICE,
    ngxBootstrap.tabs.SERVICES
  ]
})
.Class(new _testCase());