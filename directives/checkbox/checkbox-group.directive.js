var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxCheckboxGroupDirective() {
  this.constructor = [
    ng.core.ElementRef,

    function ngxCheckboxGroupDirective(elementRef) {
      if (elementRef) {
        this.elementRef = elementRef;

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
  properties: ['model'],
  events: ['modelChange']
})
.Class(new _ngxCheckboxGroupDirective());