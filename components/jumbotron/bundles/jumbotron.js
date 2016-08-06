webpackJsonp([20],{

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxJumbotronComponent", function() { return ngxJumbotronComponent; });


function _ngxJumbotronComponent() {
  var _base;
  
  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];
  
  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],

    function ngxJumbotronComponent(elementRef, renderer) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, arguments);
    }
  ];
  
  this.getPrefixClass = function () {
    return 'ngx-jumbotron';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}

var ngxJumbotronComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'ngx-jumbotron',
  template: __webpack_require__(705),
  styles: [__webpack_require__(524)],
  properties: ['initCssClass:class']
})
.Class(new _ngxJumbotronComponent());

/***/ },

/***/ 524:
/***/ function(module, exports) {

module.exports = ":host(.ngx-jumbotron) { display: block; padding: 2rem 1rem 2rem 1rem; margin: 0 0 2rem 0; background-color: #eceeef; } @media (min-width: 544px) { :host(.ngx-jumbotron) { padding: 4rem 2rem 4rem 2rem; } } :host(.ngx-jumbotron) hr { border-top-color: #818b92; }"

/***/ },

/***/ 705:
/***/ function(module, exports) {

module.exports = "<ng-content></ng-content>";

/***/ },

/***/ 952:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jumbotron_component__ = __webpack_require__(212);

/* harmony export */ __webpack_require__.d(exports, "NGX_JUMBOTRON_DIRECTIVES", function() { return NGX_JUMBOTRON_DIRECTIVES; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__jumbotron_component__) if(["NGX_JUMBOTRON_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__jumbotron_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));




var NGX_JUMBOTRON_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__jumbotron_component__["ngxJumbotronComponent"]];

/***/ }

},[952]);