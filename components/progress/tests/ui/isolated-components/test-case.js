var ngCore = require('@angular/core/index.js');
var ngxProgress = require('../../../../progress/index.js');

function _testCase() {
  this.constructor = function () {
    this.progresses = {
      warning: { value: 75, max: 100 },
      danger: { value: 100, max: 100 }
    };
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/progress/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxProgress.PROGRESS_DIRECTIVES
  ]
})
.Class(new _testCase());