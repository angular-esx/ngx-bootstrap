function _testCase() {
  this.constructor = function () {
    this.type = 'pill';
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/label/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.label.DIRECTIVES
  ]
})
.Class(new _testCase());