function _testCase() {
  this.constructor = function () {};
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/card/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.card.DIRECTIVES
  ]
})
.Class(new _testCase());