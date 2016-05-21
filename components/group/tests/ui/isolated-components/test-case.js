var ngxGroupComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxGroupService = require('./../../../../../components/group/services/group.service.js');
var ngxButtonComponent = require('./../../../../../components/button/button.component.bootstrap4.js');
var ngxButtonService = require('./../../../../../components/button/services/button.service.js');
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

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
   ngxColorService,
   ngxSizeService,
   ngxTypeService,
   ngxStateService,
   ngxWindowService,
   ngxGroupService,
   ngxButtonService
  ]
})
.Class(new _testCase());