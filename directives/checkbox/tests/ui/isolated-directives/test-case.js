var ngxCheckboxDirective = require('./../../../checkbox.directive.js');
var ngxCheckboxService = require('./../../../services/checkbox.service.js');
var ngxButtonComponent = require('./../../../../../components/button/button.component.bootstrap4.js');
var ngxButtonService = require('./../../../../../components/button/services/button.service.js');
var ngxGroupComponent = require('./../../../../../components/group/group.component.bootstrap4.js');
var ngxGroupService = require('./../../../../../components/group/services/group.service.js');
var ngxCheckboxGroupDirective = require('./../../../checkbox-group.directive.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

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
   ngxColorService,
   ngxTypeService,
   ngxSizeService,
   ngxStateService,
   ngxGroupService,
   ngxButtonService,
   ngxCheckboxService
  ]
})
.Class(new _testCase());