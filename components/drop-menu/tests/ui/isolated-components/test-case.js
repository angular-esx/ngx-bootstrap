function _testCase() {
  this.constructor = [ngxBootstrap['drop-menu'].SERVICE, function (ngxDropMenuService) {
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
    ngxBootstrap['drop-menu'].DIRECTIVES
  ],
  providers: [
   ngxBootstrap.coreService,
   ngxBootstrap['drop-menu'].SERVICE,
   ngxBootstrap['drop-menu'].ITEM_SERVICE,
   ngxBootstrap.group.SERVICE,
   ngxBootstrap.button.SERVICE,
   ngxBootstrap.link.SERVICE
  ]
})
.Class(new _testCase());