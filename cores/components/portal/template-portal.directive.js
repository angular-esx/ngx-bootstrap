import * as ngCore from '@angular/core';
import ngxTemplatePortal from './models/template-portal.model';


function _ngxTemplatePortalDirective() {
  var _base;

  this.extends = ngxTemplatePortal;

  this.constructor = [
    ngCore.TemplateRef,
    ngCore.ViewContainerRef,

    function ngxTemplatePortalDirective(templateRef, viewContainerRef) {
      ngxTemplatePortal.apply(this, arguments);
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxTemplatePortal); }
    return _base;
  }
}


export var ngxTemplatePortalDirective = ngCore.Directive({
  selector: '[ngx-portal]'
})
.Class(new _ngxTemplatePortalDirective());