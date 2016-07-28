var ngCore = require('@angular/core/index.js');
var ngxPopoverService = require('./services/popover.service.js');

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

module.exports = ngCore.Directive({
  selector: '[ngxPopoverTemplate]',
  properties: ['id']
})
.Class(new _ngxPopoverTemplateDirective());