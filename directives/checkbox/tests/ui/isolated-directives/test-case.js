function _testCase() {
  this.constructor = [ngxBootstrap.checkbox.SERVICE, function (ngxCheckboxService) {
    this.STATES = ngxCheckboxService.getStates();

    this.ngxCheckboxTracker = { value: '' };
    this.ngxCheckboxGroupTracker = [];
    this.ngxVerticalCheckboxGroupTracker = [];
  }];
}

var isolatedDirectives = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/checkbox/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxBootstrap.group.DIRECTIVES,
    ngxBootstrap.button.DIRECTIVES,
    ngxBootstrap.checkbox.DIRECTIVES,
  ],
  providers: [
   ngxBootstrap.coreService,
   ngxBootstrap.group.SERVICE,
   ngxBootstrap.button.SERVICE,
   ngxBootstrap.checkbox.SERVICE
  ]
})
.Class(new _testCase());