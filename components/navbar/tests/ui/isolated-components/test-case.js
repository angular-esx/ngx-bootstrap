function _testCase() {
  this.constructor = function () {};
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/navbar/tests/ui/isolated-components/test-case.html',
  directives: [
    ngx.navbar.DIRECTIVES,
    ngx.link.DIRECTIVES
  ]
})
.Class(new _testCase());