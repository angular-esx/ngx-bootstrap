﻿function _testCase() {
  this.constructor = function () {};
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/card/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.card.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService
  ]
})
.Class(new _testCase());