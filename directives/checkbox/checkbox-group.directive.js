var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxCheckboxGroupDirective() {
  this.constructor = [
    ngCore.ElementRef,

    function ngxCheckboxGroupDirective(elementRef) {
       this.elementRef = elementRef;

      if (elementRef) {
        this.checkboxModelChange = new ngCore.EventEmitter();
      }
    }
  ];

  this.hasValue = function (value) {
    return ngxUtil.isArray(this.model) ? this.model.indexOf(value) !== -1 : this.model === value;
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

module.exports = ngCore.Directive({
  selector: '[ngx-checkbox-group]',
  properties: ['model:checkboxModel'],
  events: ['checkboxModelChange']
})
.Class(new _ngxCheckboxGroupDirective());