import * as ngCore from '@angular/core';
import ngxBasePortal from './base-portal.model';


function _ngxTemplatePortal() {
  var _base;

  this.extends = ngxBasePortalClass;

  this.constructor = function ngxTemplatePortal(templateRef, viewContainerRef) {
    ngxBasePortalClass.apply(this, arguments);

    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  };

  this.attach = function(host, locals) {
    this.locals = locals || {};

    return _getBaseInstance(this).attach.apply(this, [host]);
  };

  this.detach = function() {
    this.locals = {};

    return _getBaseInstance(this).detach.apply(this, [host]);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBasePortalClass); }
    return _base;
  }
}


export var _ngxTemplatePortal = ngCore.Class(new _ngxTemplatePortal());