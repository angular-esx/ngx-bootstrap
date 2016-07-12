function _testCase() {
  this.constructor = [ngxBootstrap.list.ITEM_SERVICE, function (ngxListItemService) {
    this.COLORS = ngxListItemService.getColors();
  }];

  this.click = function (event) {
    event.preventDefault();
    console.log('clicked');
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/list/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.list.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService,
    ngxBootstrap.list.SERVICES
  ]
})
.Class(new _testCase());