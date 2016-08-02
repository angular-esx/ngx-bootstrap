import * as ngCore from '@angular/core';
import ngxDropMenuService from './services/drop-menu.service';

function _ngxToggleDropdownDirective() {
  this.constructor = [ngxDropMenuService, function ngxToggleDropdownDirective(ngxDropMenuService) {
    this.ngxDropMenuService = ngxDropMenuService;
  }];

  this.toggle = function () {
    this.ngxDropMenuService.toggleDropdown(this.id);
  };
}

export var ngxToggleDropdownDirective = ngCore.Directive({
  selector: '[ngx-toggle-dropdown]',
  properties: ['id:ngx-toggle-dropdown'],
  host: {
    '[class.ngx-toggle-dropdown]': 'true',
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleDropdownDirective());