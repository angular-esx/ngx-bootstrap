import * as ngCore from '@angular/core';
import ngxDropMenuService from './services/drop-menu.service';

function _ngxToggleDropupDirective() {
  this.constructor = [ngxDropMenuService, function ngxToggleDropupDirective(ngxDropMenuService) {
    this.ngxDropMenuService = ngxDropMenuService;
  }];

  this.toggle = function () {
    this.ngxDropMenuService.toggleDropup(this.id);
  };
}

export var ngxToggleDropupDirective = ngCore.Directive({
  selector: '[ngx-toggle-dropup]',
  properties: ['id:ngx-toggle-dropup'],
  host: {
    '[class.ngx-toggle-dropup]': 'true',
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleDropupDirective());