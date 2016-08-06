webpackJsonp([19],{

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxLabelComponent", function() { return ngxLabelComponent; });



function _ngxLabelComponent() {
  var _base;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],

    function ngxLabelComponent(elementRef, renderer) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, arguments);
    }
  ];

  this.initDefaultValues = function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

     return _changeRecord;
  };

  this.getPrefixClass = function(){
    return 'ngx-label';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}


var ngxLabelComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'ngx-label',
  template: __webpack_require__(706),
  styles: [__webpack_require__(525)],
  properties: ['color', 'type', 'initCssClass:class']
})
.Class(new _ngxLabelComponent());

/***/ },

/***/ 525:
/***/ function(module, exports) {

module.exports = ":host(.ngx-label) { display: inline-block; font-size: 0.75em; font-weight: bold; line-height: 1.1; padding: 0.25em 0.4em; text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: 0.25rem; } :host(.ngx-label) a { color: whitesmoke; } :host(.ngx-label):empty { display: none; } :host(.ngx-label).ngx-label-type-pill { padding: 0.25em 0.6em; border-radius: 10rem; } :host(.ngx-label).ngx-label-color-default { color: white; background-color: #818b92; } :host(.ngx-label).ngx-label-color-primary { color: white; background-color: #0275d9; } :host(.ngx-label).ngx-label-color-info { color: white; background-color: #5abfdd; } :host(.ngx-label).ngx-label-color-success { color: white; background-color: #5cb75c; } :host(.ngx-label).ngx-label-color-warning { color: white; background-color: #efac4d; } :host(.ngx-label).ngx-label-color-danger { color: white; background-color: #d8544f; }"

/***/ },

/***/ 706:
/***/ function(module, exports) {

module.exports = "<ng-content></ng-content>";

/***/ },

/***/ 953:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__label_component__ = __webpack_require__(213);

/* harmony export */ __webpack_require__.d(exports, "NGX_LABEL_DIRECTIVES", function() { return NGX_LABEL_DIRECTIVES; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__label_component__) if(["NGX_LABEL_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__label_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));



var NGX_LABEL_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__label_component__["ngxLabelComponent"]];

/***/ }

},[953]);