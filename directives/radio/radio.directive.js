var ngCore = require('@angular/core/index.js');
var ngxRadioGroupDirective = require('./radio-group.directive.js');

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

module.exports = ngCore.Directive({
  selector: '[ngx-radio]',
  properties: ['value:ngx-radio-value'],
  host: {
    '(click)': 'check($event)'
  }
})
.Class(new _ngxRadioDirective());