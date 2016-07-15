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

        this.changingModelEmitter = new ng.core.EventEmitter(false);
      }
    }
  ];

  this.isChecked = function () {
    return this.ngxRadioGroup.model === this.value;
  };

  this.check = function () {
    var _hasCanceled = false;
    this.changingModelEmitter.emit({
      cancel: function () {
        _hasCanceled = true;
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });

    if(_hasCanceled){ return; }

    this.ngxRadioGroup.change(this.value);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-radio]',
  properties: ['value:ngx-radio-value'],
  events: [
    'changingModelEmitter:ngx-radio-onChangingModel'
  ],
  host: {
    '(click)': 'check($event)'
  }
})
.Class(new _ngxRadioDirective());