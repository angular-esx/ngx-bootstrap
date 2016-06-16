var ngxGroupComponent = require('components/group/group.component.js');
var ngxGroupService = require('components/group/services/group.service.js');
var ngxButtonComponent = require('components/button/button.component.js');
var ngxButtonService = require('components/button/services/button.service.js');
var ngxCoreService = require('coreService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _testCase() {
  this.constructor = [ngxGroupService, function (ngxGroupService) {
    this.TYPES = ngxGroupService.getTypes();
    this.SIZES = ngxGroupService.getSizes();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/group/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxGroupComponent,
    ngxButtonComponent
  ],
  providers: [
   ngxCoreService,
   ngxGroupService,
   ngxButtonService
  ]
})
.Class(new _testCase());