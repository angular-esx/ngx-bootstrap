var ngxToggleItemDirective = require('directives/toggle-item/toggle-item.directive.js');
var ngxToggleItemService = require('directives/toggle-item/services/toggle-item.service.js');
var ngxButtonComponent = require('components/button/button.component.js');
var ngxButtonService = require('components/button/services/button.service.js');
var ngxCoreService = require('coreService');

function _testCase() {
  this.constructor = [ngxButtonService, function (ngxButtonService) {
    this.COLORS = ngxButtonService.getColors();
    this.SIZES = ngxButtonService.getSizes();
    this.STATES = ngxButtonService.getStates();
  }];
  
  this.toggle = function (event) {
    console.log(event);
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/toggle-item/tests/ui/isolated-directives/test-case.html',
  directives: [
    ngxButtonComponent,
    ngxToggleItemDirective
  ],
   providers: [
    ngxToggleItemService,
    ngxButtonService,
    ngxCoreService
  ]
})
.Class(new _testCase());