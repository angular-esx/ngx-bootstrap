import * as ngCore from '@angular/core';

function _ngxRadioGroupDirective() {
  this.constructor = [
    ngCore.ElementRef,

    function ngxRadioGroupDirective(elementRef) {
      this.elementRef = elementRef;

      if (elementRef) {
        this.radioModelChange = new ngCore.EventEmitter();
      }
    }
  ];

  this.change = function (value) {
    this.model = value;
    this.radioModelChange.emit(value);
  };
}

export var ngxRadioGroupDirective = ngCore.Directive({
  selector: '[ngx-radio-group]',
  properties: ['id: ngx-radio-group', 'model:radioModel'],
  events: ['radioModelChange']
})
.Class(new _ngxRadioGroupDirective());