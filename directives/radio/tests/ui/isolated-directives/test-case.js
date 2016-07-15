function _testCase() {
  this.constructor = function () {
    this.ngxRadioGroupTracker = { value: '' };
    this.ngxVerticalRadioGroupTracker = { value: '' };
  };
}

var isolatedDirectives = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/radio/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxBootstrap.group.DIRECITVES,
    ngxBootstrap.button.DIRECITVES,
    ngxBootstrap.radio.DIRECTIVES
  ]
})
.Class(new _testCase());