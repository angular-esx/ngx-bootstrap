function _testCase() {
  this.constructor = function() {};
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/jumbotron/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.jumbotron.DIRECTIVES
  ]
})
.Class(new _testCase());