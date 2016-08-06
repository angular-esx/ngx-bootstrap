webpackJsonp([18],{

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxLinkComponent", function() { return ngxLinkComponent; });


function _ngxLinkComponent() {
  var _base;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],

    function ngxLinkComponent(elementRef, renderer) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, arguments);

      if (elementRef) {
        this.clickEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
      }
    }
  ];

  this.ngOnChanges = function(changeRecord){
    this.isDisabled = this.propertyHasValue(this.getStyleProperties().STATE, 'disabled');

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.initDefaultValues = function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.color)){ 
      this.color = 'primary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

    if(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.state) && __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.isDisabled)){ this.isDisabled = false; }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-link';
  };

  this.click = function (event) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    else {
      this.clickEmitter.emit(event);
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}

var ngxLinkComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'a[ngx-link]',
  template: __webpack_require__(707),
  styles: [__webpack_require__(526)],
  properties: ['color', 'size', 'state', 'initCssClass:class'],
  events: ['clickEmitter:onClick'],
  host: {
    '(click)': 'click($event)'
  }
})
.Class(new _ngxLinkComponent());

/***/ },

/***/ 526:
/***/ function(module, exports) {

module.exports = ":host(.ngx-link) { font-weight: normal; text-align: center; text-decoration: none; background-color: transparent; border-color: transparent; font-size: 1rem; } :host(.ngx-link).ngx-link-state-active { outline: 0; } :host(.ngx-link).ngx-link-state-disabled { cursor: not-allowed; } :host(.ngx-link).ngx-link-color-primary { color: #0275d9; } :host(.ngx-link).ngx-link-color-primary:focus, :host(.ngx-link).ngx-link-color-primary:hover, :host(.ngx-link).ngx-link-color-primary.ngx-link-state-active { color: #025aa7; } :host(.ngx-link).ngx-link-color-primary:focus, :host(.ngx-link).ngx-link-color-primary:hover { text-decoration: underline; } :host(.ngx-link).ngx-link-color-primary.ngx-link-state-disabled { color: rgba(2, 117, 217, 0.65); } :host(.ngx-link).ngx-link-color-secondary { color: #818b92; } :host(.ngx-link).ngx-link-color-secondary:focus, :host(.ngx-link).ngx-link-color-secondary:hover, :host(.ngx-link).ngx-link-color-secondary.ngx-link-state-active { color: #383b3d; } :host(.ngx-link).ngx-link-color-secondary:focus, :host(.ngx-link).ngx-link-color-secondary:hover { text-decoration: underline; } :host(.ngx-link).ngx-link-color-secondary.ngx-link-state-disabled { color: rgba(129, 139, 146, 0.65); } :host(.ngx-link).ngx-link-color-info { color: #5abfdd; } :host(.ngx-link).ngx-link-color-info:focus, :host(.ngx-link).ngx-link-color-info:hover, :host(.ngx-link).ngx-link-color-info.ngx-link-state-active { color: #30aed5; } :host(.ngx-link).ngx-link-color-info:focus, :host(.ngx-link).ngx-link-color-info:hover { text-decoration: underline; } :host(.ngx-link).ngx-link-color-info.ngx-link-state-disabled { color: rgba(90, 191, 221, 0.65); } :host(.ngx-link).ngx-link-color-success { color: #5cb75c; } :host(.ngx-link).ngx-link-color-success:focus, :host(.ngx-link).ngx-link-color-success:hover, :host(.ngx-link).ngx-link-color-success.ngx-link-state-active { color: #449c44; } :host(.ngx-link).ngx-link-color-success:focus, :host(.ngx-link).ngx-link-color-success:hover { text-decoration: underline; } :host(.ngx-link).ngx-link-color-success.ngx-link-state-disabled { color: rgba(92, 183, 92, 0.65); } :host(.ngx-link).ngx-link-color-warning { color: #efac4d; } :host(.ngx-link).ngx-link-color-warning:focus, :host(.ngx-link).ngx-link-color-warning:hover, :host(.ngx-link).ngx-link-color-warning.ngx-link-state-active { color: #eb961e; } :host(.ngx-link).ngx-link-color-warning:focus, :host(.ngx-link).ngx-link-color-warning:hover { text-decoration: underline; } :host(.ngx-link).ngx-link-color-warning.ngx-link-state-disabled { color: rgba(239, 172, 77, 0.65); } :host(.ngx-link).ngx-link-color-danger { color: #d8544f; } :host(.ngx-link).ngx-link-color-danger:focus, :host(.ngx-link).ngx-link-color-danger:hover, :host(.ngx-link).ngx-link-color-danger.ngx-link-state-active { color: #a94342; } :host(.ngx-link).ngx-link-color-danger:focus, :host(.ngx-link).ngx-link-color-danger:hover { text-decoration: underline; } :host(.ngx-link).ngx-link-color-danger.ngx-link-state-disabled { color: rgba(216, 84, 79, 0.65); } :host(.ngx-link).ngx-link-size-small { font-size: 0.875rem; } :host(.ngx-link).ngx-link-size-large { font-size: 1.25rem; } :host(.ngx-link).ngx-link-size-block { display: block; width: 100%; box-sizing: border-box; } :host(.ngx-link).ngx-link-size-block + .ngx-link-size-block { margin-top: .5rem; }"

/***/ },

/***/ 707:
/***/ function(module, exports) {

module.exports = "<ng-content></ng-content>";

/***/ },

/***/ 954:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__link_component__ = __webpack_require__(214);

/* harmony export */ __webpack_require__.d(exports, "NGX_LINK_DIRECTIVES", function() { return NGX_LINK_DIRECTIVES; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__link_component__) if(["NGX_LINK_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__link_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));




var NGX_LINK_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__link_component__["ngxLinkComponent"]];

/***/ }

},[954]);