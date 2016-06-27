var NGX_LIST = require('components/list/index.js');
var NGX_LINK = require('components/link/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_LIST.SERVICE, function (ngxListService) {
    this.COLORS = ngxListService.getColors();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/list/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LIST.DIRECTIVES,
    NGX_LINK.DIRECTIVES
  ],
  providers: [
    NGX_CORE_SERVICES,
    NGX_LINK.SERVICE,
    NGX_LIST.SERVICE
  ]
})
.Class(new _testCase());