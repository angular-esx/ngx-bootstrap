var ngCore = require('@angular/core/index.js');
var ngxGroup = require('../../../../../components/group/index.js');
var ngxButton = require('../../../../../components/button/index.js');
var ngxCheckbox = require('../../../../checkbox/index.js');

function _testCase() {
  this.constructor = function () {
    this.ngxCheckboxTracker = { value: '' };
    this.ngxCheckboxGroupTracker = [];
    this.ngxVerticalCheckboxGroupTracker = [];
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/checkbox/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxGroup.GROUP_DIRECTIVES,
    ngxButton.BUTTON_DIRECTIVES,
    ngxCheckbox.CHECKBOX_DIRECTIVES
  ]
})
.Class(new _testCase());