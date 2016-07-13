function _testCase() {
  this.constructor = function () {
    this.progresses = {
      warning: { value: 75, max: 100 },
      danger: { value: 100, max: 100 }
    };
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/progress/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.progress.DIRECTIVES
  ]
})
.Class(new _testCase());