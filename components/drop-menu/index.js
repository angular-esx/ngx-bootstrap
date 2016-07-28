var ngxDropMenuComponent = require('./drop-menu.component.js');
var ngxDropMenuItemDirective = require('./drop-menu-item.directive.js');
var ngxToggleDropdownDirective = require('./toggle-dropdown.directive.js');
var ngxToggleDropupDirective = require('./toggle-dropup.directive.js');
var ngxDropMenuService = require('./services/drop-menu.service.js');

module.exports = {
  dropMenuComponent: ngxDropMenuComponent,
  dropMenuItemDirective: ngxDropMenuItemDirective,
  toggleDropdownDirective: ngxToggleDropdownDirective,
  toggleDropupDirective: ngxToggleDropupDirective,
  dropMenuService: ngxDropMenuService,
  DROPMENU_DIRECTIVES: [
    ngxDropMenuComponent,
    ngxDropMenuItemDirective,
    ngxToggleDropdownDirective,
    ngxToggleDropupDirective
  ],
  DROPMENU_PROVIDERS: [ngxDropMenuService]
};