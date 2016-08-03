import * as ngCore from '@angular/core';
import { ngxBasePortal } from './base-portal.model';


function _ngxComponentPortal() {
  var _base;

  this.extends = ngxBasePortal;

  this.constructor = function ngxComponentPortal(component, viewContainerRef, injector) {
    ngxBasePortal.apply(this, arguments);

    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBasePortal); }
    return _base;
  }
}


export var ngxComponentPortal = ngCore.Class(new _ngxComponentPortal());