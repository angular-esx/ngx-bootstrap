import * as ngCore from '@angular/core';
import { ngxTemplatePortalDirective } from  '../../cores';

function _ngxTabHeaderDirective() {
  var _base;

  this.extends = ngxTemplatePortalDirective;

  this.constructor = [
    ngCore.TemplateRef,
    ngCore.ViewContainerRef,

    function ngxTabHeaderDirective(templateRef, viewContainerRef) {
      ngxTemplatePortalDirective.apply(this, arguments);
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxTemplatePortalDirective); }
    return _base;
  }
}

export var ngxTabHeaderDirective = ngCore.Directive({
  selector: 'template[ngx-tab-header]'
})
.Class(new _ngxTabHeaderDirective());