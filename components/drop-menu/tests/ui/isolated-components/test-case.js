function _testCase() {
  this.constructor = [ngxBootstrap.dropMenu.SERVICE, function (ngxDropMenuService) {
    this.href = 'https://translate.google.com.vn';

    this.STATES = ngxDropMenuService.getStates();
  }];

  this.alert = function (id) {
    alert('You have just clicked ' + id);
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/drop-menu/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.group.DIRECTIVES,
    ngxBootstrap.button.DIRECTIVES,
    ngxBootstrap.link.DIRECTIVES,
    ngxBootstrap.dropMenu.DIRECTIVES
  ],
  providers: [
   ngxBootstrap.coreService,
   ngxBootstrap.dropMenu.SERVICE,
   ngxBootstrap.dropMenu.ITEM_SERVICE,
   ngxBootstrap.group.SERVICE,
   ngxBootstrap.button.SERVICE,
   ngxBootstrap.link.SERVICE
  ]
})
.Class(new _testCase());