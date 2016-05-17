var ngxRadioDirective = require('./../../../radio.directive.js');
var ngxRadioService = require('./../../../services/radio.service.js');
var ngxButtonComponent = require('./../../../../../components/button/button.component.js');
var ngxButtonService = require('./../../../../../components/button/services/button.service.js');
var ngxGroupComponent = require('./../../../../../components/group/group.component.js');
var ngxGroupService = require('./../../../../../components/group/services/group.service.js');
var ngxRadioGroupDirective = require('./../../../radio-group.directive.js');
var ngxRadioGroupService = require('./../../../services/radio-group.service.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/render/type.service.js');
var ngxSizeService = require('./../../../../../cores/services/render/size.service.js');
var ngxStateService = require('./../../../../../cores/services/render/state.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

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
    ngxRadioGroupDirective,
    ngxGroupComponent,
    ngxButtonComponent,
    ngxRadioDirective
  ],
  providers: [
   ngxColorService,
   ngxTypeService,
   ngxSizeService,
   ngxStateService,
   ngxGroupService,
   ngxButtonService,
   ngxRadioService,
   ngxRadioGroupService
  ]
})
.Class(new _testCase());