var ngCore = require('@angular/core/index.js');
var ngxCard = require('../../../../card/index.js');

function _testCase() {
  this.constructor = function () {};
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/card/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxCard.CARD_DIRECTIVES
  ]
})
.Class(new _testCase());