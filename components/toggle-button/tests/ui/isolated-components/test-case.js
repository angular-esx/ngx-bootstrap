var ngxToggleButtonComponent = require('./../../../toggle-button.component.js');
var ngxToggleButtonService = require('./../../../services/toggle-button.service.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxSizeService = require('./../../../../../cores/services/render/size.service.js');
var ngxStateService = require('./../../../../../cores/services/render/state.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxToggleButtonService, function (ngxToggleButtonService) {
    this.COLORS = ngxToggleButtonService.getColors();
    this.SIZES = ngxToggleButtonService.getSizes();
    this.STATES = ngxToggleButtonService.getStates();
  }];
  
  this.toggle = function (event) {
    console.log(event);
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: ngxBootstrap.configs.fileService.getTestCaseTemplate('toggle-button'),
  directives: [
    ngxToggleButtonComponent
  ],
   providers: [
    ngxColorService,
    ngxSizeService,
    ngxStateService,
    ngxToggleButtonService
  ]
})
.Class(new _testCase());