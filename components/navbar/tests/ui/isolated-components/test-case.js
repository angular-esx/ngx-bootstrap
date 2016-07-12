function _testCase() {
  this.constructor = [ngxBootstrap.navbar.SERVICE, function (ngxNavbarService) {
    this.COLORS = ngxNavbarService.getColors();
  }];
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/navbar/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.navbar.DIRECTIVES,
    ngxBootstrap.link.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService,
    ngxBootstrap.navbar.SERVICE,
    ngxBootstrap.link.SERVICE
  ]
})
.Class(new _testCase());