function _testCase() {
  this.constructor = [ngxBootstrap.radio.radioService, function (ngxRadioService) {
    this.STATES = ngxRadioService.getStates();

    this.ngxRadioGroupTracker = { value: '' };
    this.ngxVerticalRadioGroupTracker = { value: '' };
  }];
}

var isolatedDirectives = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/radio/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxBootstrap.group.DIRECITVES,
    ngxBootstrap.button.DIRECITVES,
    ngxBootstrap.radio.DIRECTIVES
  ],
  providers: [
   ngxBootstrap.group.SERVICE,
   ngxBootstrap.button.SERVICE,
   ngxBootstrap.radio.services,
   ngxBootstrap.coreService
  ]
})
.Class(new _testCase());