var NGX_LIST = require('components/list/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_LIST.ITEM_SERVICE, function (ngxListItemService) {
    this.COLORS = ngxListItemService.getColors();
  }];

  this.click = function (event) {
    event.preventDefault();
    console.log('clicked');
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/list/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LIST.DIRECTIVES
  ],
  providers: [
    NGX_CORE_SERVICES,
    NGX_LIST.SERVICES
  ]
})
.Class(new _testCase());