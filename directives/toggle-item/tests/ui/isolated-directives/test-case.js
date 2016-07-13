function _testCase() {
  this.constructor = [ngxBootstrap.button.SERVICE, function (ngxButtonService) {
    this.COLORS = ngxButtonService.getColors();
    this.SIZES = ngxButtonService.getSizes();
    this.STATES = ngxButtonService.getStates();
  }];
  
  this.toggle = function (event) {
    console.log(event);
  };
}

var isolatedDirectives = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/toggle-item/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxBootstrap.button.DIRECTIVES,
    ngxBootstrap.toggleItem.DIRECTIVES
  ],
   providers: [
    ngxBootstrap.toggleItem.SERVICE,
    ngxBootstrap.button.SERVICE,
    ngxBootstrap.coreService
  ]
})
.Class(new _testCase());