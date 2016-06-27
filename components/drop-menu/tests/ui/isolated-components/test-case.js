var NGX_DROP_MENU = require('components/drop-menu/index.js');
var NGX_GROUP = require('components/group/index.js');
var NGX_BUTTON = require('components/button/index.js');
var NGX_LINK = require('components/link/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_DROP_MENU.SERVICE, function (ngxDropMenuService) {
    this.href = 'https://translate.google.com.vn';

    this.STATES = ngxDropMenuService.getStates();
  }];

  this.alert = function (id) {
    alert('You have just clicked ' + id);
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/drop-menu/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_GROUP.DIRECTIVES,
    NGX_BUTTON.DIRECTIVES,
    NGX_LINK.DIRECTIVES,
    NGX_DROP_MENU.DIRECTIVES
  ],
  providers: [
   NGX_CORE_SERVICES,
   NGX_DROP_MENU.SERVICE,
   NGX_DROP_MENU.ITEM_SERVICE,
   NGX_GROUP.SERVICE,
   NGX_BUTTON.SERVICE,
   NGX_LINK.SERVICE
  ]
})
.Class(new _testCase());