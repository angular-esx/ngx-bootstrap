var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;
var ngxCheckboxGroupDirective = require('./checkbox-group.directive.js');

function _ngxCheckboxDirective() {
  this.constructor = [
    ngCore.ElementRef,
    [new ngCore.Optional(), ngxCheckboxGroupDirective],

    function ngxCheckboxDirective(elementRef, ngxCheckboxGroup) {
      this.elementRef = elementRef;

      if (elementRef) {
        this.ngxCheckboxGroup = ngxCheckboxGroup;

        this.checkboxModelChange = new ngCore.EventEmitter();
      }
    }
  ];

  this.isChecked = function () {
    if (this.ngxCheckboxGroup) {
      return this.ngxCheckboxGroup.hasValue(this.checkedValue);
    }
    else {
      return ngxUtil.isArray(this.model) ? this.model.indexOf(this.checkedValue) !== -1 : this.model === this.checkedValue;
    }
  };

  this.check = function (event) {
    if (this.ngxCheckboxGroup) {
      this.ngxCheckboxGroup.addOrRemoveValue(this.checkedValue);
    }
    else {
      this.addOrRemoveValue();
    }
  };

  this.addOrRemoveValue = function () {
    if (this.isChecked()) {
      if (ngxUtil.isArray(this.model)) {
        this.model.splice(this.model.indexOf(this.checkedValue), 1);
      }
      else {
        this.model = this.unCheckedValue;
      }
    }
    else {
      if (ngxUtil.isArray(this.model)) {
        this.model.push(this.checkedValue);
      }
      else {
        this.model = this.checkedValue;
      }
    }

    this.checkboxModelChange.emit(this.model);
  };
}

module.exports = ngCore.Directive({
  selector: '[ngx-checkbox]',
  properties: [
    'model:checkboxModel',
    'checkedValue: ngx-checkbox-checked-value', 
    'unCheckedValue: ngx-checkbox-unchecked-value'
  ],
  events: [
    'checkboxModelChange'
  ],
  host: {
    '(click)': 'check($event)'
  }
})
.Class(new _ngxCheckboxDirective());