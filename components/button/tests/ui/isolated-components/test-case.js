function _testCase() {
  this.constructor = [ngxBootstrap.button.SERVICE, function (ngxButtonService) {
    this.COLORS = ngxButtonService.getColors();
  }];

  this.click = function (event) {
    console.log('clicked');
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/button/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.button.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService,
    ngxBootstrap.button.SERVICE
  ]
})
.Class(new _testCase());