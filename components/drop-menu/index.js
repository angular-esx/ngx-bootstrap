var ngxBootstrap = require('ngxBootstrap');
var ngxDropMenuComponent = require('./drop-menu.component.js');
var ngxDropMenuItemDirective = require('./drop-menu-item.directive.js');
var ngxToggleDropdownDirective = require('./toggle-dropdown.directive.js');
var ngxToggleDropupDirective = require('./toggle-dropup.directive.js');
var ngxDropMenuService = require('./services/drop-menu.service.js');

ngxBootstrap.dropMenu = {
  DROPMENU_COMPONENT: ngxDropMenuComponent,
  DROPMENU_ITEM_DIRECTIVE: ngxDropMenuItemDirective,
  TOOGLE_DROPDOWN_DIRECTIVE: ngxToggleDropdownDirective,
  TOGGLE_DROPUP_DIRECTIVE: ngxToggleDropupDirective,
  DROPMENU_SERVICE: ngxDropMenuService,
  DIRECTIVES: [
    ngxDropMenuComponent,
    ngxDropMenuItemDirective,
    ngxToggleDropdownDirective,
    ngxToggleDropupDirective
  ],
  SERVICES: [ ngxDropMenuService ]
};

module.exports = ngxBootstrap;