import * as ngCore from '@angular/core';
import ngxPopoverService from './services/popover.service';

function _ngxPopoverTemplateDirective() {
  this.constructor = [
    ngCore.TemplateRef,
    ngxPopoverService,

    function ngxPopoverTemplateDirective(templateRef, ngxPopoverService) {
      if (templateRef) {
        this.templateRef = templateRef;
        this.ngxPopoverService = ngxPopoverService;
      }
    }
  ];

  this.ngOnInit = function () {
    if (this.templateRef) {
      this.ngxPopoverService.cacheTemplateRef(this.id, this.templateRef);
    }
  };
}

export var ngxPopoverTemplateDirective = ngCore.Directive({
  selector: '[ngxPopoverTemplate]',
  properties: ['id']
})
.Class(new _ngxPopoverTemplateDirective());