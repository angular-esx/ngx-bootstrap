var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxCheckboxGroupDirective() {
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,

    function ngxCheckboxGroupDirective(elementRef, ngxRendererService) {
      if (elementRef) {
        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService;

        this.modelChange = new ng.core.EventEmitter();
      }
    }
  ];

  this.hasValue = function (value) {
    return ngxBootstrap.isArray(this.model) ? this.model.indexOf(value) !== -1 : this.model === value;
  };

  this.addOrRemoveValue = function (value) {
    if (this.hasValue(value)) {
      this.model.splice(this.model.indexOf(value), 1);
    }
    else {
      this.model.push(value);
    }

    this.modelChange.emit(this.model);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-checkbox-group]',
  providers: [ngxRenderService],
  properties: ['model: model'],
  events: ['modelChange']
})
.Class(new _ngxCheckboxGroupDirective());