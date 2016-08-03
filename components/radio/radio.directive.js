import * as ngCore from '@angular/core';
import { ngxRadioGroupDirective } from './radio-group.directive';

function _ngxRadioDirective() {
  this.constructor = [
    ngCore.ElementRef,
    [new ngCore.Optional(), ngxRadioGroupDirective],

    function ngxRadioDirective(elementRef, ngxRadioGroup) {
      if (!ngxRadioGroup) { throw 'ngxRadioGroup is required'; }

      this.elementRef = elementRef;

      if (elementRef) {
        this.ngxRadioGroup = ngxRadioGroup;
      }
    }
  ];

  this.isChecked = function () {
    return this.ngxRadioGroup.model === this.value;
  };

  this.check = function () {
    this.ngxRadioGroup.change(this.value);
  };
}

export var ngxRadioDirective = ngCore.Directive({
  selector: '[ngx-radio]',
  properties: ['value:ngx-radio-value'],
  host: {
    '(click)': 'check($event)'
  }
})
.Class(new _ngxRadioDirective());