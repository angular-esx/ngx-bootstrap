﻿function _ngxCheckboxGroupDirective() {
  this.constructor = [
    ng.core.ElementRef,

    function ngxCheckboxGroupDirective(elementRef) {
       this.elementRef = elementRef;

      if (elementRef) {
        this.checkboxModelChange = new ng.core.EventEmitter();
      }
    }
  ];

  this.hasValue = function (value) {
    return ngx.isArray(this.model) ? this.model.indexOf(value) !== -1 : this.model === value;
  };

  this.addOrRemoveValue = function (value) {
    if (this.hasValue(value)) {
      this.model.splice(this.model.indexOf(value), 1);
    }
    else {
      this.model.push(value);
    }

    this.checkboxModelChange.emit(this.model);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-checkbox-group]',
  properties: ['model:checkboxModel'],
  events: ['checkboxModelChange']
})
.Class(new _ngxCheckboxGroupDirective());