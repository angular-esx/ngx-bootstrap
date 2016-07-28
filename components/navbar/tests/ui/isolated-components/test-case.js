var ngCore = require('@angular/core/index.js');
var ngxLink = require('../../../../link/index.js');
var ngxNavbar = require('../../../../navbar/index.js');

function _testCase() {
  this.constructor = function () {};
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/navbar/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLink.LINK_DIRECTIVES,
    ngxNavbar.NAVBAR_DIRECTIVES,
  ]
})
.Class(new _testCase());