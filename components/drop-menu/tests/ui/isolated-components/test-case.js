var ngxDropMenuComponent = require('components/drop-menu/drop-menu.component.js');
var ngxDropMenuService = require('components/drop-menu/services/drop-menu.service.js');
var ngxDropMenuItemDirective = require('components/drop-menu/drop-menu-item.directive.js');
var ngxDropMenuItemService = require('components/drop-menu/services/drop-menu-item.service.js');
var ngxToggleDropdownDirective = require('components/drop-menu/toggle-dropdown.directive.js');
var ngxToggleDropupDirective = require('components/drop-menu/toggle-dropup.directive.js');
var ngxGroupComponent = require('components/group/group.component.js');
var ngxGroupService = require('components/group/services/group.service.js');
var ngxButtonComponent = require('components/button/button.component.js');
var ngxButtonService = require('components/button/services/button.service.js');
var ngxLinkComponent = require('cores/components/link/link.component.js');
var ngxLinkService = require('cores/components/link/services/link.service.js');
var ngxItemComponent = require('cores/components/item/item.component.js');
var ngxItemService = require('cores/components/item/services/item.service.js');
var ngxTypeService = require('cores/services/type.service.js');
var ngxCoreService = require('coreService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

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
   ngxTypeService,
   ngxGroupService,
   ngxButtonService,
   ngxLinkService,
   ngxItemService,
   ngxDropMenuItemService,
   ngxDropMenuService,
   ngxCoreService
  ]
})
.Class(new _testCase());