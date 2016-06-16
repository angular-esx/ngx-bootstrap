var ngxTooltipService = require('./services/tooltip.service.js');

function _ngxTooltipTemplateDirective() {
  this.constructor = [
    ng.core.TemplateRef,
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

module.exports = ng.core.Directive({
  selector: '[ngxTooltipTemplate]',
  properties: ['id']
})
.Class(new _ngxTooltipTemplateDirective());