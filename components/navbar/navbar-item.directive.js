import * as ngCore from '@angular/core';

function _ngxNavbarItemDirective() {
  this.constructor = function ngxNavbarItemDirective() {};

  this.ngOnChanges = function (changeRecord) {
    this.isActive = this.state && this.state.indexOf('active') > -1;
  };
}

export var _ngxNavbarItemDirective = ngCore.Directive({
  selector: '[ngx-navbar-item]',
  properties: ['state:ngx-navbar-item-state'],
  host: {
    '[class.ngx-navbar-item]': 'true',
    '[class.ngx-navbar-item-state-active]': 'isActive',
  }
})
.Class(new _ngxNavbarItemDirective());