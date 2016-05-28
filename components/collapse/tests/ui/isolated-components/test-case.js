var ngxCollapseComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxToggleCollapseDirective = require('./../../../toggle-collapse.directive.js');
var ngxCollapseService = require('./../../../services/collapse.service.js');
var ngxColorService = require('./../../../../../' + __COLOR_SERVICE__);
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxAnimationService = require('./../../../../../cores/services/animation.service.js');
var ngxButtonComponent = require('./../../../../../components/button/button.component.bootstrap4.js');
var ngxButtonService = require('./../../../../../components/button/services/button.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP_UTILS__);

function _testCase() {
  this.constructor = [ngxCollapseService, function (ngxCollapseService) {
    this.STATES = ngxCollapseService.getStates();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/collapse/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxCollapseComponent,
    ngxButtonComponent,
    ngxToggleCollapseDirective
  ],
  providers: [
    ngxColorService,
    ngxTypeService,
    ngxSizeService,
    ngxStateService,
    ngxAnimationService,
    ngxWindowService,
    ngxCollapseService,
    ngxButtonService
  ]
})
.Class(new _testCase());