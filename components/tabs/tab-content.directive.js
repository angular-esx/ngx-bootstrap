import * as ngCore from '@angular/core';
import ngxTemplatePortalDirective from  '../cores';

function _ngxTabContentDirective() {
  var _base;

  this.extends = ngxTemplatePortalDirective;

  this.constructor = [
    ngCore.TemplateRef,
    ngCore.ViewContainerRef,

    function ngxTabContentDirective(templateRef, viewContainerRef) {
      ngxTemplatePortalDirective.apply(this, arguments);
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxTemplatePortalDirective); }
    return _base;
  }
}

export var ngxTabContentDirective = ngCore.Directive({
  selector: 'template[ngx-tab-content]'
})
.Class(new _ngxTabContentDirective());