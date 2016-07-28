var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../../../../cores/index.js');
var ngxButton = require('../../../../button/index.js');
var ngxCollapse = require('../../../../collapse/index.js');

function _testCase() {
  this.constructor = function () {};
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/collapse/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxButton.BUTTON_DIRECTIVES,
    ngxCollapse.COLLAPSE_DIRECTIVES
  ],
  providers: [
    ngxCore.animationService,
    ngxCollapse.COLLAPSE_PROVIDERS
  ]
})
.Class(new _testCase());