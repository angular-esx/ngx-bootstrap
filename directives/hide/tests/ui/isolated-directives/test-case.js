var ngCore = require('@angular/core/index.js');
var ngxHide = require('../../../../hide/index.js');

function _testCase() {
  this.constructor = function () {};
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/hide/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxHide.HIDE_DIRECTIVES
  ]
})
.Class(new _testCase());