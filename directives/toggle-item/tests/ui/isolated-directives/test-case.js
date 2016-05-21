var ngxToggleItemDirective = require('./../../../../../directives/toggle-item/toggle-item.directive.js');
var ngxToggleItemService = require('./../../../../../directives/toggle-item/services/toggle-item.service.js');
var ngxButtonComponent = require('./../../../../../components/button/button.component.bootstrap4.js');
var ngxButtonService = require('./../../../../../components/button/services/button.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

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
    ngxColorService,
    ngxSizeService,
    ngxStateService,
    ngxWindowService,
    ngxToggleItemService,
    ngxButtonService
  ]
})
.Class(new _testCase());