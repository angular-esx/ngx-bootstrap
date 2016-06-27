var NGX_NAVBAR = require('components/navbar/index.js');
var NGX_LINK = require('components/link/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_NAVBAR.SERVICE, function (ngxNavbarService) {
    this.COLORS = ngxNavbarService.getColors();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/navbar/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_NAVBAR.DIRECTIVES,
    NGX_LINK.DIRECTIVES
  ],
  providers: [
    NGX_CORE_SERVICES,
    NGX_NAVBAR.SERVICE,
    NGX_LINK.SERVICE
  ]
})
.Class(new _testCase());