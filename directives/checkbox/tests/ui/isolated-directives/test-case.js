function _testCase() {
  this.constructor = function () {
    this.ngxCheckboxTracker = { value: '' };
    this.ngxCheckboxGroupTracker = [];
    this.ngxVerticalCheckboxGroupTracker = [];
  };
}

var isolatedDirectives = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/checkbox/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxBootstrap.group.DIRECTIVES,
    ngxBootstrap.button.DIRECTIVES,
    ngxBootstrap.checkbox.DIRECTIVES,
  ]
})
.Class(new _testCase());