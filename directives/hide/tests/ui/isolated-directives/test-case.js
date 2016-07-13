function _testCase() {
  this.constructor = [ngxBootstrap.hide.SERVICE, function (ngxHideService) {
    this.BREAKPOINTS = ngxHideService.getBreakpoints();
  }];
}

var isolatedDirectives = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/hide/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxBootstrap.hide.DIRECTIVES
  ],
  providers: [
   ngxBootstrap.hide.SERVICE,
   ngxBootstrap.coreService
  ]
})
.Class(new _testCase());