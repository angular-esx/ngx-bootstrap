import * as ngCore from '@angular/core';
import ngxTooltipService from './services/tooltip.service';

function _ngxTooltipTemplateDirective() {
  this.constructor = [
    ngCore.TemplateRef,
    ngxTooltipService,

    function ngxTooltipTemplateDirective(templateRef, ngxTooltipService) {
      if (templateRef) {
        this.templateRef = templateRef;
        this.ngxTooltipService = ngxTooltipService;
      }
    }
  ];

  this.ngOnInit = function () {
    if (this.templateRef) {
      this.ngxTooltipService.cacheTemplateRef(this.id, this.templateRef);
    }
  };
}

export var ngxTooltipTemplateDirective = ngCore.Directive({
  selector: '[ngxTooltipTemplate]',
  properties: ['id']
})
.Class(new _ngxTooltipTemplateDirective());