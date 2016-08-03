import { ngxDropMenuComponent } from './drop-menu.component';
import { ngxDropMenuItemDirective } from './drop-menu-item.directive';
import { ngxToggleDropdownDirective } from './toggle-dropdown.directive.js';
import { ngxToggleDropupDirective } from './toggle-dropup.directive.js';
import { ngxDropMenuService } from './services/drop-menu.service';

export * from './drop-menu.component';
export * from './drop-menu-item.directive';
export * from './toggle-dropdown.directive.js';
export * from './toggle-dropup.directive.js';
export * from './services/drop-menu.service';


export var NGX_DROPMENU_DIRECTIVES = [
  ngxDropMenuComponent,
  ngxDropMenuItemDirective,
  ngxToggleDropdownDirective,
  ngxToggleDropupDirective
];

export var NGX_DROPMENU_PROVIDERS = [ngxDropMenuService];