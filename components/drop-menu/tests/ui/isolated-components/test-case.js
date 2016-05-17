var ngxDropMenuComponent = require('./../../../drop-menu.component.js');
var ngxDropMenuService = require('./../../../services/drop-menu.service.js');
var ngxDropMenuItemDirective = require('./../../../../../directives/drop-menu-item/drop-menu-item.directive.js');
var ngxDropMenuItemService = require('./../../../../../directives/drop-menu-item/services/drop-menu-item.service.js');
var ngxToggleDropdownDirective = require('./../../../../../directives/toggle-dropdown/toggle-dropdown.directive.js');
var ngxToggleDropupDirective = require('./../../../../../directives/toggle-dropup/toggle-dropup.directive.js');
var ngxGroupComponent = require('./../../../../../components/group/group.component.js');
var ngxGroupService = require('./../../../../../components/group/services/group.service.js');
var ngxButtonComponent = require('./../../../../../components/button/button.component.js');
var ngxButtonService = require('./../../../../../components/button/services/button.service.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');
var ngxItemComponent = require('./../../../../../cores/components/item/item.component.js');
var ngxItemService = require('./../../../../../cores/components/item/services/item.service.js');
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxDropMenuService, function (ngxDropMenuService) {
    this.href = 'https://translate.google.com.vn';

    this.STATES = ngxDropMenuService.getStates();
  }];

  this.alert = function (id) {
    alert('You have just clicked ' + id);
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/drop-menu/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLinkComponent,
    ngxItemComponent,
    ngxGroupComponent,
    ngxButtonComponent,
    ngxDropMenuComponent,
    ngxDropMenuItemDirective,
    ngxToggleDropdownDirective,
    ngxToggleDropupDirective
  ],
  providers: [
   ngxColorService,
   ngxSizeService,
   ngxTypeService,
   ngxStateService,
   ngxGroupService,
   ngxButtonService,
   ngxLinkService,
   ngxItemService,
   ngxDropMenuItemService,
   ngxDropMenuService
  ]
})
.Class(new _testCase());