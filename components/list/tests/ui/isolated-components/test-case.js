var ngCore = require('@angular/core/index.js');
var ngxList = require('../../../../list/index.js');

function _testCase() {
  this.constructor = function () {};

  this.click = function (event) {
    event.preventDefault();
    console.log('clicked');
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/list/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxList.LIST_DIRECTIVES
  ]
})
.Class(new _testCase());