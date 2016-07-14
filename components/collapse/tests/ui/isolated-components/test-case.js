function _testCase() {
  this.constructor = function () {};
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/collapse/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.button.DIRECTIVES,
    ngxBootstrap.collapse.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService.ANIMATION_SERVICE,
    ngxBootstrap.collapse.SERVICES
  ]
})
.Class(new _testCase());