webpackJsonp([15],{

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxProgressComponent", function() { return ngxProgressComponent; });


function _ngxProgressComponent() {
  var _base;
  var _PROPERTIES = {
    VALUE: 'value',
    MAX: 'max'
  };

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],

    function ngxProgressComponent(elementRef, renderer) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, arguments);
      
      if (elementRef) {
        this.currentProgress = 0;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _self = this;
    setTimeout(function () {
      _self.currentProgress = (_self.value / _self.max) * 100;
    });

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.initDefaultValues = function(){
    var _changeRecord;

    if(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.value)){ 
      this.value = 0;
      _changeRecord = this.buildChangeRecord(_PROPERTIES.VALUE, this.value);
     }

    if(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.max)){ 
      this.max = 100;
      _changeRecord = this.buildChangeRecord(_PROPERTIES.MAX, this.max);
     }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-progress';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}

var ngxProgressComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'ngx-progress',
  template: __webpack_require__(717),
  styles: [__webpack_require__(533)],
  properties: ['color', 'value', 'max', 'initCssClass:class'],
  host: {
    '[class.ngx-progress]': 'true'
  }
})
.Class(new _ngxProgressComponent());

/***/ },

/***/ 533:
/***/ function(module, exports) {

module.exports = "@-webkit-keyframes ngx-progress-bar-stripes { from { background-position: 1rem 0; } to { background-position: 0 0; } }@keyframes ngx-progress-bar-stripes { from { background-position: 1rem 0; } to { background-position: 0 0; } }:host(.ngx-progress) { display: block; height: 1rem; margin: 0 0 1rem 0; overflow: hidden; background-color: rgba(129, 139, 146, 0.65); border-radius: 0.25rem; } :host(.ngx-progress) > .ngx-progress-bar { text-align: center; font-size: 0.875rem; line-height: 1.1rem; float: left; width: 0%; height: 100%; -webkit-transition: width 0.6s ease; transition: width 0.6s ease; } :host(.ngx-progress).ngx-progress-color-striped > .ngx-progress-bar { background-size: 1rem 1rem; background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); } :host(.ngx-progress).ngx-progress-color-striped.ngx-progress-color-animated-striped > .ngx-progress-bar { -webkit-animation: ngx-progress-bar-stripes 2s linear infinite; animation: ngx-progress-bar-stripes 2s linear infinite; } :host(.ngx-progress).ngx-progress-color-primary > .ngx-progress-bar { color: white; background-color: #0275d9; } :host(.ngx-progress).ngx-progress-color-info > .ngx-progress-bar { color: white; background-color: #5abfdd; } :host(.ngx-progress).ngx-progress-color-success > .ngx-progress-bar { color: white; background-color: #5cb75c; } :host(.ngx-progress).ngx-progress-color-warning > .ngx-progress-bar { color: white; background-color: #efac4d; } :host(.ngx-progress).ngx-progress-color-danger > .ngx-progress-bar { color: white; background-color: #d8544f; }"

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = "<div class=\"ngx-progress-bar\" [style.width.%]=\"currentProgress\">\r\n  <ng-content></ng-content>\r\n</div>";

/***/ },

/***/ 961:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_component__ = __webpack_require__(227);

/* harmony export */ __webpack_require__.d(exports, "NGX_PROGRESS_DIRECTIVES", function() { return NGX_PROGRESS_DIRECTIVES; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__progress_component__) if(["NGX_PROGRESS_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__progress_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));




var NGX_PROGRESS_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__progress_component__["ngxProgressComponent"]];

/***/ }

},[961]);