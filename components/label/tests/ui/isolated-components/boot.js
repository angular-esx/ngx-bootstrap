function _testCase() {
  this.constructor = [ngxBootstrap.label.SERVICE, function (ngxLabelService) {
    this.COLORS = ngxLabelService.getColors();
    this.TYPES = ngxLabelService.getTypes();
  }];
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/label/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.label.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.label.SERVICE,
    ngxBootstrap.coreService
  ]
})
.Class(new _testCase());

document.addEventListener('DOMContentLoaded', function () {
  ng.platform.browser.bootstrap(isolatedComponents, []);
});