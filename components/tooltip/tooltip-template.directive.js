var ngCore = require('@angular/core/index.js');
var ngxTooltipService = require('./services/tooltip.service.js');

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

module.exports = ngCore.Directive({
  selector: '[ngxTooltipTemplate]',
  properties: ['id']
})
.Class(new _ngxTooltipTemplateDirective());