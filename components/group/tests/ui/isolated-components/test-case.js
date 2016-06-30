var NGX_GROUP = require('components/group/index.js');
var NGX_BUTTON = require('components/button/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_GROUP.SERVICE, function (ngxGroupService) {
    this.TYPES = ngxGroupService.getTypes();
    this.SIZES = ngxGroupService.getSizes();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/group/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_GROUP.DIRECTIVES,
    NGX_BUTTON.DIRECTIVES
  ],
  providers: [
   NGX_CORE_SERVICES,
   NGX_GROUP.SERVICE,
   NGX_BUTTON.SERVICE
  ]
})
.Class(new _testCase());