var ngCore = require('@angular/core/index.js');
var ngxButton = require('../../../../button/index.js');

function _testCase() {
  this.constructor = function () {};

  this.click = function (event) {
    console.log('clicked');
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/button/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxButton.BUTTON_DIRECTIVES
  ]
})
.Class(new _testCase());