function _testCase() {
  this.constructor = function () {};
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/collapse/tests/ui/isolated-components/test-case.html',
  directives: [
    ngx.button.DIRECTIVES,
    ngx.collapse.DIRECTIVES
  ],
  providers: [
    ngx.core.animationService,
    ngx.collapse.PROVIDERS
  ]
})
.Class(new _testCase());