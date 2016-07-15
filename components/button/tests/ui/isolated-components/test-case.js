function _testCase() {
  this.constructor = function () {};

  this.click = function (event) {
    console.log('clicked');
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/button/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.button.DIRECTIVES
  ]
})
.Class(new _testCase());