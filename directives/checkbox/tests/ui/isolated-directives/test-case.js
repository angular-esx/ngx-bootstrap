var ngxCheckboxDirective = require('directives/checkbox/checkbox.directive.js');
var ngxCheckboxService = require('directives/checkbox/services/checkbox.service.js');
var ngxButtonComponent = require('components/button/button.component.js');
var ngxButtonService = require('components/button/services/button.service.js');
var ngxGroupComponent = require('components/group/group.component.js');
var ngxGroupService = require('components/group/services/group.service.js');
var ngxCheckboxGroupDirective = require('directives/checkbox/checkbox-group.directive.js');
var ngxCoreService = require('coreService');

function _testCase() {
  this.constructor = [ngxCheckboxService, function (ngxCheckboxService) {
    this.STATES = ngxCheckboxService.getStates();

    this.ngxCheckboxTracker = { value: '' };
    this.ngxCheckboxGroupTracker = [];
    this.ngxVerticalCheckboxGroupTracker = [];
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/checkbox/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxGroupComponent,
    ngxButtonComponent,
    ngxCheckboxDirective,
    ngxCheckboxGroupDirective
  ],
  providers: [
   ngxCoreService,
   ngxGroupService,
   ngxButtonService,
   ngxCheckboxService
  ]
})
.Class(new _testCase());