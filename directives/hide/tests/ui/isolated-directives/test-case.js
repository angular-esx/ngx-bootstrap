function _testCase() {
  this.constructor = function () {};
}

var isolatedDirectives = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/hide/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxBootstrap.hide.DIRECTIVES
  ]
})
.Class(new _testCase());