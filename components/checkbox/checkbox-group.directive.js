import * as ngCore from '@angular/core';
import { ngxUtils } from  '../../cores';

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
    return ngxUtils.isArray(this.model) ? this.model.indexOf(value) !== -1 : this.model === value;
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

export var ngxCheckboxGroupDirective = ngCore.Directive({
  selector: '[ngx-checkbox-group]',
  properties: ['model:checkboxModel'],
  events: ['checkboxModelChange']
})
.Class(new _ngxCheckboxGroupDirective());