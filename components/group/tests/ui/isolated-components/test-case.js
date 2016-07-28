var ngCore = require('@angular/core/index.js');
var ngxButton = require('../../../../button/index.js');
var ngxDropMenu = require('../../../../drop-menu/index.js');
var ngxGroup = require('../../../../group/index.js');

function _testCase() {
  this.constructor = function () {};
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/group/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxButton.BUTTON_DIRECTIVES,
    ngxDropMenu.DROPMENU_DIRECTIVES,
    ngxGroup.GROUP_DIRECTIVES
  ],
  providers: [
    ngxDropMenu.DROPMENU_PROVIDERS
  ]
})
.Class(new _testCase());