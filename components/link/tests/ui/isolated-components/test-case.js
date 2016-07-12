function _testCase() {
  this.constructor = [ngxBootstrap.link.SERVICE, function (ngxLinkService) {
    this.COLORS = ngxLinkService.getColors();
    this.href = "http://www.google.com";
  }];

  this.click = function (event) {
    console.log('clicked');
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/link/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.link.DIRECTIVES
  ],
   providers: [
    ngxBootstrap.link.SERVICE,
    ngxBootstrap.coreService
  ]
})
.Class(new _testCase());