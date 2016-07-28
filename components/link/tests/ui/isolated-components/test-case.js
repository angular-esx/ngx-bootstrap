var ngCore = require('@angular/core/index.js');
var ngxLink = require('../../../../link/index.js');

function _testCase() {
  this.constructor = function () {
    this.href = "http://www.google.com";
  };

  this.click = function (event) {
    console.log('clicked');
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/link/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLink.LINK_DIRECTIVES
  ]
})
.Class(new _testCase());