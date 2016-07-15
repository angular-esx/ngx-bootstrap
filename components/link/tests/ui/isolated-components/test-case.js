function _testCase() {
  this.constructor = function () {
    this.href = "http://www.google.com";
  };

  this.click = function (event) {
    console.log('clicked');
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/link/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.link.DIRECTIVES
  ]
})
.Class(new _testCase());