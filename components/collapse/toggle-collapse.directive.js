import * as ngCore from '@angular/core';
import { ngxCollapseService } from './services/collapse.service';

function _ngxToggleCollapseDirective() {
  this.constructor = [
    ngxCollapseService,

    function ngxToggleCollapseDirective(ngxCollapseService) {
      this.ngxCollapseService = ngxCollapseService;
    }
  ];

  this.toggle = function () {
    this.ngxCollapseService.toggle(this.id);
  };
}

export var ngxToggleCollapseDirective = ngCore.Directive({
  selector: '[ngx-toggle-collapse]',
  properties: ['id: ngx-toggle-collapse'],
  host: {
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleCollapseDirective());