var ngxDropMenuComponent = require('./../../../drop-menu.component.js');
var ngxDropMenuService = require('./../../../services/drop-menu.service.js');
var ngxDropMenuItemService = require('./../../../services/drop-menu-item.service.js');
var ngxToggleDropdownDirective = require('./../../../../../directives/toggle-dropdown/toggle-dropdown.directive.js');
var ngxToggleDropupDirective = require('./../../../../../directives/toggle-dropup/toggle-dropup.directive.js');
var ngxGroupComponent = require('./../../../../../components/group/group.component.js');
var ngxGroupService = require('./../../../../../components/group/services/group.service.js');
var ngxButtonComponent = require('./../../../../../components/button/button.component.js');
var ngxButtonService = require('./../../../../../components/button/services/button.service.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxItemComponent = require('./../../../../../cores/components/item/item.component.js');
var ngxTypeService = require('./../../../../../cores/services/render/type.service.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxSizeService = require('./../../../../../cores/services/render/size.service.js');
var ngxStateService = require('./../../../../../cores/services/render/state.service.js');
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
  templateUrl: ngxBootstrap.configs.fileService.getTestCaseTemplate('drop-menu'),
  directives: [
    ngxLinkComponent,
    ngxItemComponent,
    ngxGroupComponent,
    ngxButtonComponent,
    ngxDropMenuComponent,
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
   ngxDropMenuService,
   ngxDropMenuItemService
  ]
})
.Class(new _testCase());