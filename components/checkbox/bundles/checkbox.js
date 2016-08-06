webpackJsonp([24],{

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxCheckboxGroupDirective", function() { return ngxCheckboxGroupDirective; });


function _ngxCheckboxGroupDirective() {
  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],

    function ngxCheckboxGroupDirective(elementRef) {
       this.elementRef = elementRef;

      if (elementRef) {
        this.checkboxModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
      }
    }
  ];

  this.hasValue = function (value) {
    return __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isArray(this.model) ? this.model.indexOf(value) !== -1 : this.model === value;
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

var ngxCheckboxGroupDirective = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"]({
  selector: '[ngx-checkbox-group]',
  properties: ['model:checkboxModel'],
  events: ['checkboxModelChange']
})
.Class(new _ngxCheckboxGroupDirective());

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_group_directive__ = __webpack_require__(128);

/* harmony export */ __webpack_require__.d(exports, "ngxCheckboxDirective", function() { return ngxCheckboxDirective; });



function _ngxCheckboxDirective() {
  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), __WEBPACK_IMPORTED_MODULE_2__checkbox_group_directive__["ngxCheckboxGroupDirective"]],

    function ngxCheckboxDirective(elementRef, ngxCheckboxGroup) {
      this.elementRef = elementRef;

      if (elementRef) {
        this.ngxCheckboxGroup = ngxCheckboxGroup;

        this.checkboxModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
      }
    }
  ];

  this.isChecked = function () {
    if (this.ngxCheckboxGroup) {
      return this.ngxCheckboxGroup.hasValue(this.checkedValue);
    }
    else {
      return __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isArray(this.model) ? this.model.indexOf(this.checkedValue) !== -1 : this.model === this.checkedValue;
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
      if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isArray(this.model)) {
        this.model.splice(this.model.indexOf(this.checkedValue), 1);
      }
      else {
        this.model = this.unCheckedValue;
      }
    }
    else {
      if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isArray(this.model)) {
        this.model.push(this.checkedValue);
      }
      else {
        this.model = this.checkedValue;
      }
    }

    this.checkboxModelChange.emit(this.model);
  };
}

var ngxCheckboxDirective = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"]({
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

/***/ },

/***/ 946:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_directive__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox_group_directive__ = __webpack_require__(128);

/* harmony export */ __webpack_require__.d(exports, "NGX_CHECKBOX_DIRECTIVES", function() { return NGX_CHECKBOX_DIRECTIVES; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__checkbox_directive__) if(["NGX_CHECKBOX_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__checkbox_directive__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__checkbox_group_directive__) if(["NGX_CHECKBOX_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_1__checkbox_group_directive__[key]; }) }(__WEBPACK_IMPORT_KEY__));






var NGX_CHECKBOX_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__checkbox_directive__["ngxCheckboxDirective"], __WEBPACK_IMPORTED_MODULE_1__checkbox_group_directive__["ngxCheckboxGroupDirective"]];


/***/ }

},[946]);