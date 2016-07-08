var NGX_LINK = require('components/link/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_LINK.SERVICE, function (ngxLinkService) {
    this.COLORS = ngxLinkService.getColors();
    this.href = "http://www.google.com";
  }];

  this.click = function (event) {
    console.log('clicked');
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/link/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LINK.DIRECTIVES
  ],
   providers: [
    NGX_LINK.SERVICE,
    NGX_CORE_SERVICES
  ]
})
.Class(new _testCase());