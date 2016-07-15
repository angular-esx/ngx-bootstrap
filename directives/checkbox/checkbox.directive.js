var ngxCheckboxGroupDirective = require('./checkbox-group.directive.js');

function _ngxCheckboxDirective() {
  this.constructor = [
    ng.core.ElementRef,
    [new ng.core.Optional(), ngxCheckboxGroupDirective],

    function ngxCheckboxDirective(elementRef, ngxCheckboxGroup) {
      this.elementRef = elementRef;

      if (elementRef) {
        this.ngxCheckboxGroup = ngxCheckboxGroup;

        this.changingModelEmitter = new ng.core.EventEmitter(false);
        this.changedModelEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.isChecked = function () {
    if (this.ngxCheckboxGroup) {
      return this.ngxCheckboxGroup.hasValue(this.checkedValue);
    }
    else {
      return ngxBootstrap.isArray(this.model) ? this.model.indexOf(this.checkedValue) !== -1 : this.model === this.checkedValue;
    }
  };

  this.check = function (event) {
    var _hasCanceled = false;
    this.changingModelEmitter.emit({
      cancel: function () {
        _hasCanceled = true;
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });

    if(_hasCanceled){ return; }

    if (this.ngxCheckboxGroup) {
      this.ngxCheckboxGroup.addOrRemoveValue(this.checkedValue);
    }
    else {
      this.addOrRemoveValue();
    }
  };

  this.addOrRemoveValue = function () {
    if (this.isChecked()) {
      if (ngxBootstrap.isArray(this.model)) {
        this.model.splice(this.model.indexOf(this.checkedValue), 1);
      }
      else {
        this.model = this.unCheckedValue;
      }
    }
    else {
      if (ngxBootstrap.isArray(this.model)) {
        this.model.push(this.checkedValue);
      }
      else {
        this.model = this.checkedValue;
      }
    }

    this.changedModelEmitter.emit(this.model);
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-checkbox]',
  properties: [
    'model:ngx-checkbox-model', 
    'checkedValue: ngx-checkbox-checked-value', 
    'unCheckedValue: ngx-checkbox-unchecked-value'
  ],
  events: [
    'changingModelEmitter:ngx-checkbox-onChangingModel',
    'changedModelEmitter:ngx-checkbox-onChangedModel'
  ],
  host: {
    '(click)': 'check($event)'
  }
})
.Class(new _ngxCheckboxDirective());