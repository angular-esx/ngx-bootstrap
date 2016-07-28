var ngCore = require('@angular/core/index.js');
var ngxLabel = require('../../../../label/index.js');

function _testCase() {
  this.constructor = function () {
    this.type = 'pill';
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/label/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLabel.LABEL_DIRECTIVES
  ]
})
.Class(new _testCase());