var ngxButtonComponent = require('./../../../button.component.js');
var ngxButtonService = require('./../../../services/button.service.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxSizeService = require('./../../../../../cores/services/render/size.service.js');
var ngxStateService = require('./../../../../../cores/services/render/state.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxButtonService, function (ngxButtonService) {
    this.COLORS = ngxButtonService.getColors();
    this.SIZES = ngxButtonService.getSizes();
    this.STATES = ngxButtonService.getStates();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: ngxBootstrap.configs.fileService.getTestCaseTemplate('button'),
  directives: [
    ngxButtonComponent
  ],
   providers: [
    ngxColorService,
    ngxSizeService,
    ngxStateService,
    ngxButtonService
  ]
})
.Class(new _testCase());