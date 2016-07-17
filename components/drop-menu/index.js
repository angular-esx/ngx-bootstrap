var ngx = require('ngx');
var ngxDropMenuComponent = require('./drop-menu.component.js');
var ngxDropMenuItemDirective = require('./drop-menu-item.directive.js');
var ngxToggleDropdownDirective = require('./toggle-dropdown.directive.js');
var ngxToggleDropupDirective = require('./toggle-dropup.directive.js');
var ngxDropMenuService = require('./services/drop-menu.service.js');

ngx.dropMenu = {
  dropMenuComponent: ngxDropMenuComponent,
  dropMenuItemDirective: ngxDropMenuItemDirective,
  toggleDropdownDirective: ngxToggleDropdownDirective,
  toggleDropupDirective: ngxToggleDropupDirective,
  dropMenuService: ngxDropMenuService,
  DIRECTIVES: [
    ngxDropMenuComponent,
    ngxDropMenuItemDirective,
    ngxToggleDropdownDirective,
    ngxToggleDropupDirective
  ],
  PROVIDERS: [ ngxDropMenuService ]
};

module.exports = ngx;