function _testCase() {
  this.constructor = function () {};

  this.click = function (event) {
    event.preventDefault();
    console.log('clicked');
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/list/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.list.DIRECTIVES
  ]
})
.Class(new _testCase());