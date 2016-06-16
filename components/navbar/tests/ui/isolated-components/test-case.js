var ngxNavbarComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxNavbarBrandDirective = require('./../../../navbar-brand.directive.js');
var ngxNavbarItemDirective = require('./../../../navbar-item.directive.js');
var ngxNavbarDividerDirective = require('./../../../navbar-divider.directive.js');
var ngxNavbarService = require('./../../../services/navbar.service.js');
var ngxColorService = require('./../../../../../' + __COLOR_SERVICE__);
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxPositionService = require('./../../../../../cores/services/position.service.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');
var ngxItemComponent = require('./../../../../../cores/components/item/item.component.js');
var ngxItemService = require('./../../../../../cores/components/item/services/item.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP_UTILS__);

function _testCase() {
  this.constructor = [ngxNavbarService, function (ngxNavbarService) {
    this.COLORS = ngxNavbarService.getColors();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/navbar/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxNavbarComponent,
    ngxLinkComponent,
    ngxItemComponent,
    ngxNavbarBrandDirective,
    ngxNavbarItemDirective,
    ngxNavbarDividerDirective
  ],
  providers: [
    ngxColorService,
    ngxTypeService,
    ngxSizeService,
    ngxStateService,
    ngxPositionService,
    ngxWindowService,
    ngxNavbarService,
    ngxLinkService,
    ngxItemService
  ]
})
.Class(new _testCase());