var ngxListComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxListItemDirective = require('./../../../list-item.directive.js');
var ngxListService = require('./../../../services/list.service.js');
var ngxColorService = require('./../../../../../' + __COLOR_SERVICE__);
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');
var ngxItemComponent = require('./../../../../../cores/components/item/item.component.js');
var ngxItemService = require('./../../../../../cores/components/item/services/item.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../../../../' + __NGX_BOOTSTRAP_UTILS__);

function _testCase() {
  this.constructor = [ngxListService, function (ngxListService) {
    this.COLORS = ngxListService.getColors();
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/list/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxListComponent,
    ngxLinkComponent,
    ngxItemComponent,
    ngxListItemDirective
  ],
  providers: [
    ngxColorService,
    ngxTypeService,
    ngxSizeService,
    ngxStateService,
    ngxWindowService,
    ngxListService,
    ngxLinkService,
    ngxItemService
  ]
})
.Class(new _testCase());