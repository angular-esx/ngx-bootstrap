var ngxRadioDirective = require('directives/radio/radio.directive.js');
var ngxRadioService = require('directives/radio/services/radio.service.js');
var ngxButtonComponent = require('components/button/button.component.js');
var ngxButtonService = require('components/button/services/button.service.js');
var ngxGroupComponent = require('components/group/group.component.js');
var ngxGroupService = require('components/group/services/group.service.js');
var ngxRadioGroupDirective = require('directives/radio/radio-group.directive.js');
var ngxRadioGroupService = require('directives/radio/services/radio-group.service.js');
var ngxCoreService = require('coreService');

function _testCase() {
  this.constructor = [ngxRadioService, function (ngxRadioService) {
    this.STATES = ngxRadioService.getStates();

    this.ngxRadioGroupTracker = { value: '' };
    this.ngxVerticalRadioGroupTracker = { value: '' };
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/radio/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxGroupComponent,
    ngxButtonComponent,
    ngxRadioDirective,
    ngxRadioGroupDirective
  ],
  providers: [
   ngxGroupService,
   ngxButtonService,
   ngxRadioService,
   ngxRadioGroupService,
   ngxCoreService
  ]
})
.Class(new _testCase());