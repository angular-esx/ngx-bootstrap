var ngCore = require('@angular/core/index.js');
var ngxGroup = require('../../../../../components/group/index.js');
var ngxButton = require('../../../../../components/button/index.js');
var ngxRadio = require('../../../../radio/index.js');

function _testCase() {
  this.constructor = function () {
    this.ngxRadioGroupTracker = { value: '' };
    this.ngxVerticalRadioGroupTracker = { value: '' };
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/radio/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxGroup.GROUP_DIRECTIVES,
    ngxButton.BUTTON_DIRECTIVES,
    ngxRadio.RADIO_DIRECTIVES
  ]
})
.Class(new _testCase());