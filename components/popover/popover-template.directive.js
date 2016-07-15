var ngxPopoverService = require('./services/popover.service.js');

function _ngxPopoverTemplateDirective() {
  this.constructor = [
    ng.core.TemplateRef,
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

module.exports = ng.core.Directive({
  selector: '[ngxPopoverTemplate]',
  properties: ['id']
})
.Class(new _ngxPopoverTemplateDirective());