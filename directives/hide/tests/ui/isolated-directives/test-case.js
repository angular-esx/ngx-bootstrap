var NGX_HIDE = require('directives/hide/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_HIDE.SERVICE, function (ngxHideService) {
    this.BREAKPOINTS = ngxHideService.getBreakpoints();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/hide/tests/ui/isolated-directives/test-case.html',
  directives: [
    NGX_HIDE.DIRECTIVES.HIDE
  ],
  providers: [
   NGX_HIDE.SERVICE,
   NGX_CORE_SERVICES
  ]
})
.Class(new _testCase());