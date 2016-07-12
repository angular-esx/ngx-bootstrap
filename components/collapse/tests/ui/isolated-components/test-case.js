function _testCase() {
  this.constructor = [ngxBootstrap.collapse.SERVICE, function (ngxCollapseService) {
    this.STATES = ngxCollapseService.getStates();
  }];
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/collapse/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.collapse.DIRECTIVES,
    ngxBootstrap.button.DIRECTIVES,
  ],
  providers: [
    ngxBootstrap.coreService,
    ngxBootstrap.collapse.SERVICE,
    ngxBootstrap.button.SERVICE
  ]
})
.Class(new _testCase());