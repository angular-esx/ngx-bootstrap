var NGX_BUTTON = require('components/button/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_BUTTON.SERVICE, function (ngxButtonService) {
    this.COLORS = ngxButtonService.getColors();
  }];

  this.click = function (event) {
    console.log('clicked');
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/button/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_BUTTON.DIRECTIVES
  ],
  providers: [
    NGX_CORE_SERVICES,
    NGX_BUTTON.SERVICE
  ]
})
.Class(new _testCase());