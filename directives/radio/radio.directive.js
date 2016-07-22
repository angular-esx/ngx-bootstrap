var ngxRadioGroupDirective = require('./radio-group.directive.js');

function _ngxRadioDirective() {
  this.constructor = [
    ng.core.ElementRef,
    [new ng.core.Optional(), ngxRadioGroupDirective],

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

module.exports = ng.core.Directive({
  selector: '[ngx-radio]',
  properties: ['value:ngx-radio-value'],
  host: {
    '(click)': 'check($event)'
  }
})
.Class(new _ngxRadioDirective());