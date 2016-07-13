function _testCase() {
  this.constructor = function () {};
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/group/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.button.DIRECTIVES,
    ngxBootstrap.group.DIRECTIVES
  ]
})
.Class(new _testCase());