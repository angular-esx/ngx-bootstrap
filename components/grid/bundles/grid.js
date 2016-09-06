webpackJsonp([8],{

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxGridColumnDirective", function() { return ngxGridColumnDirective; });


function _ngxGridColumnDirective() {
  var _base, _STYLE_PROPERTIES;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],

    function ngxGridColumnDirective(elementRef, renderer) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"].apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-grid-col';
  };

  this.getStyleProperties = function() {
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = {
        SIZE: 'size',
        OFFSET: 'offset',
        ORDER: 'order',
        ALIGN_SELF: 'alignSelf'
      };

      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
    }

    return _STYLE_PROPERTIES;
  };

  this.buildCssClassForProperty = function(propertyName, propertyValue){
    var _styleProperties = this.getStyleProperties();

    if(
      propertyName === _styleProperties.SIZE || 
      propertyName === _styleProperties.OFFSET ||
      propertyName === _styleProperties.ORDER ||
      propertyName === _styleProperties.ALIGN_SELF
    ){
      if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(propertyValue)) { return ''; }

      var _parts,
          _cssClasses = [],
          _values = propertyValue.split(' '),
          _prefixClass = this.getPrefixClass(),
          _propertyName = propertyName
                          .replace(/([A-Z])/g, function (x, y) { return '-' + y; })
                          .replace(/^-/, '')
                          .toLowerCase();

      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].forEach(_values, function (value) {
        _parts = value.split('-');

        if (_parts.length === 2) {
          _cssClasses.push([_prefixClass, _parts[0], _propertyName, _parts[1]].join('-'));
        }
        else if(_parts.length === 3){
          _cssClasses.push([_prefixClass, _parts[0], _propertyName, _parts[1] + '_' + _parts[2]].join('-'));
        }
      });

      return _cssClasses.length === 0 ? '' : _cssClasses.join(' ');
    }
    else{
      return _getBaseInstance(this).buildCssClassForProperty.apply(this, arguments);
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"]); }
    return _base;
  }
}

var ngxGridColumnDirective = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"]({
  selector: 'ngx-grid-col',
  properties: ['size', 'offset', 'order', 'alignSelf:align-self', 'initCssClass:class']
})
.Class(new _ngxGridColumnDirective());


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxGridRowDirective", function() { return ngxGridRowDirective; });


function _ngxGridRowDirective() {
  var _base, _STYLE_PROPERTIES;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],

    function ngxGridRowDirective(elementRef, renderer) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"].apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-grid-row';
  };

  this.getStyleProperties = function() {
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = {
        JUSTIFY_CONTENT: 'justifyContent',
        ALIGN_CONTENT: 'alignContent',
        ALIGN_ITENS: 'alignItems'
      };

      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
    }

    return _STYLE_PROPERTIES;
  };

  this.buildCssClassForProperty = function(propertyName, propertyValue){
    var _styleProperties = this.getStyleProperties();

    if(
      propertyName === _styleProperties.JUSTIFY_CONTENT || 
      propertyName === _styleProperties.ALIGN_CONTENT ||
      propertyName === _styleProperties.ALIGN_ITENS
    ){
      if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(propertyValue)) { return ''; }

      var _parts,
          _cssClasses = [],
          _values = propertyValue.split(' '),
          _prefixClass = this.getPrefixClass();
          _propertyName = propertyName
                          .replace(/([A-Z])/g, function (x, y) { return '-' + y; })
                          .replace(/^-/, '')
                          .toLowerCase();

      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].forEach(_values, function (value) {
        _parts = value.split('-');

        if (_parts.length === 2) {
          _cssClasses.push([_prefixClass, _parts[0], _propertyName, _parts[1]].join('-'));
        }
        else if(_parts.length === 3){
          _cssClasses.push([_prefixClass, _parts[0], _propertyName, _parts[1] + '_' + _parts[2]].join('-'));
        }
      });

      return _cssClasses.length === 0 ? '' : _cssClasses.join(' ');
    }
    else{
      return _getBaseInstance(this).buildCssClassForProperty.apply(this, arguments);
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"]); }
    return _base;
  }
}

var ngxGridRowDirective = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"]({
  selector: 'ngx-grid-row',
  properties: [
    'justifyContent:justify-content', 
    'alignContent:align-content', 
    'alignItems:align-items',
    'initCssClass:class'
  ]
})
.Class(new _ngxGridRowDirective());


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxGridComponent", function() { return ngxGridComponent; });


function _ngxGridComponent() {
  var _base;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],

    function ngxGridComponent(elementRef, renderer) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-grid';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}

var ngxGridComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'ngx-grid',
  template: __webpack_require__(702),
  styles: [__webpack_require__(521)],
  properties: ['type', 'initCssClass:class']
})
.Class(new _ngxGridComponent());

/***/ },

/***/ 521:
/***/ function(module, exports) {

module.exports = ":host(.ngx-grid) { display: block; margin-left: auto; margin-right: auto; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } @media (min-width: 544px) { :host(.ngx-grid):not(.ngx-grid-type-fluid) { max-width: 576px; } } @media (min-width: 768px) { :host(.ngx-grid):not(.ngx-grid-type-fluid) { max-width: 720px; } } @media (min-width: 992px) { :host(.ngx-grid):not(.ngx-grid-type-fluid) { max-width: 940px; } } @media (min-width: 1200px) { :host(.ngx-grid):not(.ngx-grid-type-fluid) { max-width: 1140px; } } :host(.ngx-grid) .ngx-grid-row { display: -webkit-box; display: -ms-flexbox; display: flex; -ms-flex-wrap: wrap; flex-wrap: wrap; margin-left: -0.9375rem; margin-right: -0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col { overflow: hidden; } :host(.ngx-grid) .ngx-grid-col-xs-size-1 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-2 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-3 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-4 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-5 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-6 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-7 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-8 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-9 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-10 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-11 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-12 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xs-size-1 { -webkit-box-flex: 0; -ms-flex: 0 0 8.33333%; flex: 0 0 8.33333%; } :host(.ngx-grid) .ngx-grid-col-xs-size-2 { -webkit-box-flex: 0; -ms-flex: 0 0 16.66667%; flex: 0 0 16.66667%; } :host(.ngx-grid) .ngx-grid-col-xs-size-3 { -webkit-box-flex: 0; -ms-flex: 0 0 25%; flex: 0 0 25%; } :host(.ngx-grid) .ngx-grid-col-xs-size-4 { -webkit-box-flex: 0; -ms-flex: 0 0 33.33333%; flex: 0 0 33.33333%; } :host(.ngx-grid) .ngx-grid-col-xs-size-5 { -webkit-box-flex: 0; -ms-flex: 0 0 41.66667%; flex: 0 0 41.66667%; } :host(.ngx-grid) .ngx-grid-col-xs-size-6 { -webkit-box-flex: 0; -ms-flex: 0 0 50%; flex: 0 0 50%; } :host(.ngx-grid) .ngx-grid-col-xs-size-7 { -webkit-box-flex: 0; -ms-flex: 0 0 58.33333%; flex: 0 0 58.33333%; } :host(.ngx-grid) .ngx-grid-col-xs-size-8 { -webkit-box-flex: 0; -ms-flex: 0 0 66.66667%; flex: 0 0 66.66667%; } :host(.ngx-grid) .ngx-grid-col-xs-size-9 { -webkit-box-flex: 0; -ms-flex: 0 0 75%; flex: 0 0 75%; } :host(.ngx-grid) .ngx-grid-col-xs-size-10 { -webkit-box-flex: 0; -ms-flex: 0 0 83.33333%; flex: 0 0 83.33333%; } :host(.ngx-grid) .ngx-grid-col-xs-size-11 { -webkit-box-flex: 0; -ms-flex: 0 0 91.66667%; flex: 0 0 91.66667%; } :host(.ngx-grid) .ngx-grid-col-xs-size-12 { -webkit-box-flex: 0; -ms-flex: 0 0 100%; flex: 0 0 100%; } :host(.ngx-grid) .ngx-grid-col-xs-order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; } :host(.ngx-grid) .ngx-grid-col-xs-order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; } :host(.ngx-grid) .ngx-grid-col-xs-order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; } :host(.ngx-grid) .ngx-grid-col-xs-order-4 { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; } :host(.ngx-grid) .ngx-grid-col-xs-order-5 { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; } :host(.ngx-grid) .ngx-grid-col-xs-order-6 { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; } :host(.ngx-grid) .ngx-grid-col-xs-order-7 { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; } :host(.ngx-grid) .ngx-grid-col-xs-order-8 { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; } :host(.ngx-grid) .ngx-grid-col-xs-order-9 { -webkit-box-ordinal-group: 10; -ms-flex-order: 9; order: 9; } :host(.ngx-grid) .ngx-grid-col-xs-order-10 { -webkit-box-ordinal-group: 11; -ms-flex-order: 10; order: 10; } :host(.ngx-grid) .ngx-grid-col-xs-order-11 { -webkit-box-ordinal-group: 12; -ms-flex-order: 11; order: 11; } :host(.ngx-grid) .ngx-grid-col-xs-order-12 { -webkit-box-ordinal-group: 13; -ms-flex-order: 12; order: 12; } :host(.ngx-grid) .ngx-grid-col-xs-offset-1 { margin-left: 0%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-2 { margin-left: 8.33333%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-3 { margin-left: 16.66667%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-4 { margin-left: 25%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-5 { margin-left: 33.33333%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-6 { margin-left: 41.66667%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-7 { margin-left: 50%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-8 { margin-left: 58.33333%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-9 { margin-left: 66.66667%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-10 { margin-left: 75%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-11 { margin-left: 83.33333%; } :host(.ngx-grid) .ngx-grid-col-xs-offset-12 { margin-left: 91.66667%; } :host(.ngx-grid) .ngx-grid-col-sm-size-1 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-2 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-3 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-4 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-5 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-6 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-7 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-8 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-9 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-10 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-11 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-sm-size-12 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } @media (min-width: 544px) { :host(.ngx-grid) .ngx-grid-col-sm-size-1 { -webkit-box-flex: 0; -ms-flex: 0 0 8.33333%; flex: 0 0 8.33333%; } :host(.ngx-grid) .ngx-grid-col-sm-size-2 { -webkit-box-flex: 0; -ms-flex: 0 0 16.66667%; flex: 0 0 16.66667%; } :host(.ngx-grid) .ngx-grid-col-sm-size-3 { -webkit-box-flex: 0; -ms-flex: 0 0 25%; flex: 0 0 25%; } :host(.ngx-grid) .ngx-grid-col-sm-size-4 { -webkit-box-flex: 0; -ms-flex: 0 0 33.33333%; flex: 0 0 33.33333%; } :host(.ngx-grid) .ngx-grid-col-sm-size-5 { -webkit-box-flex: 0; -ms-flex: 0 0 41.66667%; flex: 0 0 41.66667%; } :host(.ngx-grid) .ngx-grid-col-sm-size-6 { -webkit-box-flex: 0; -ms-flex: 0 0 50%; flex: 0 0 50%; } :host(.ngx-grid) .ngx-grid-col-sm-size-7 { -webkit-box-flex: 0; -ms-flex: 0 0 58.33333%; flex: 0 0 58.33333%; } :host(.ngx-grid) .ngx-grid-col-sm-size-8 { -webkit-box-flex: 0; -ms-flex: 0 0 66.66667%; flex: 0 0 66.66667%; } :host(.ngx-grid) .ngx-grid-col-sm-size-9 { -webkit-box-flex: 0; -ms-flex: 0 0 75%; flex: 0 0 75%; } :host(.ngx-grid) .ngx-grid-col-sm-size-10 { -webkit-box-flex: 0; -ms-flex: 0 0 83.33333%; flex: 0 0 83.33333%; } :host(.ngx-grid) .ngx-grid-col-sm-size-11 { -webkit-box-flex: 0; -ms-flex: 0 0 91.66667%; flex: 0 0 91.66667%; } :host(.ngx-grid) .ngx-grid-col-sm-size-12 { -webkit-box-flex: 0; -ms-flex: 0 0 100%; flex: 0 0 100%; } :host(.ngx-grid) .ngx-grid-col-sm-order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; } :host(.ngx-grid) .ngx-grid-col-sm-order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; } :host(.ngx-grid) .ngx-grid-col-sm-order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; } :host(.ngx-grid) .ngx-grid-col-sm-order-4 { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; } :host(.ngx-grid) .ngx-grid-col-sm-order-5 { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; } :host(.ngx-grid) .ngx-grid-col-sm-order-6 { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; } :host(.ngx-grid) .ngx-grid-col-sm-order-7 { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; } :host(.ngx-grid) .ngx-grid-col-sm-order-8 { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; } :host(.ngx-grid) .ngx-grid-col-sm-order-9 { -webkit-box-ordinal-group: 10; -ms-flex-order: 9; order: 9; } :host(.ngx-grid) .ngx-grid-col-sm-order-10 { -webkit-box-ordinal-group: 11; -ms-flex-order: 10; order: 10; } :host(.ngx-grid) .ngx-grid-col-sm-order-11 { -webkit-box-ordinal-group: 12; -ms-flex-order: 11; order: 11; } :host(.ngx-grid) .ngx-grid-col-sm-order-12 { -webkit-box-ordinal-group: 13; -ms-flex-order: 12; order: 12; } :host(.ngx-grid) .ngx-grid-col-sm-offset-1 { margin-left: 0%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-2 { margin-left: 8.33333%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-3 { margin-left: 16.66667%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-4 { margin-left: 25%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-5 { margin-left: 33.33333%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-6 { margin-left: 41.66667%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-7 { margin-left: 50%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-8 { margin-left: 58.33333%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-9 { margin-left: 66.66667%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-10 { margin-left: 75%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-11 { margin-left: 83.33333%; } :host(.ngx-grid) .ngx-grid-col-sm-offset-12 { margin-left: 91.66667%; } } :host(.ngx-grid) .ngx-grid-col-md-size-1 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-2 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-3 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-4 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-5 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-6 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-7 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-8 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-9 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-10 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-11 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-md-size-12 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } @media (min-width: 768px) { :host(.ngx-grid) .ngx-grid-col-md-size-1 { -webkit-box-flex: 0; -ms-flex: 0 0 8.33333%; flex: 0 0 8.33333%; } :host(.ngx-grid) .ngx-grid-col-md-size-2 { -webkit-box-flex: 0; -ms-flex: 0 0 16.66667%; flex: 0 0 16.66667%; } :host(.ngx-grid) .ngx-grid-col-md-size-3 { -webkit-box-flex: 0; -ms-flex: 0 0 25%; flex: 0 0 25%; } :host(.ngx-grid) .ngx-grid-col-md-size-4 { -webkit-box-flex: 0; -ms-flex: 0 0 33.33333%; flex: 0 0 33.33333%; } :host(.ngx-grid) .ngx-grid-col-md-size-5 { -webkit-box-flex: 0; -ms-flex: 0 0 41.66667%; flex: 0 0 41.66667%; } :host(.ngx-grid) .ngx-grid-col-md-size-6 { -webkit-box-flex: 0; -ms-flex: 0 0 50%; flex: 0 0 50%; } :host(.ngx-grid) .ngx-grid-col-md-size-7 { -webkit-box-flex: 0; -ms-flex: 0 0 58.33333%; flex: 0 0 58.33333%; } :host(.ngx-grid) .ngx-grid-col-md-size-8 { -webkit-box-flex: 0; -ms-flex: 0 0 66.66667%; flex: 0 0 66.66667%; } :host(.ngx-grid) .ngx-grid-col-md-size-9 { -webkit-box-flex: 0; -ms-flex: 0 0 75%; flex: 0 0 75%; } :host(.ngx-grid) .ngx-grid-col-md-size-10 { -webkit-box-flex: 0; -ms-flex: 0 0 83.33333%; flex: 0 0 83.33333%; } :host(.ngx-grid) .ngx-grid-col-md-size-11 { -webkit-box-flex: 0; -ms-flex: 0 0 91.66667%; flex: 0 0 91.66667%; } :host(.ngx-grid) .ngx-grid-col-md-size-12 { -webkit-box-flex: 0; -ms-flex: 0 0 100%; flex: 0 0 100%; } :host(.ngx-grid) .ngx-grid-col-md-order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; } :host(.ngx-grid) .ngx-grid-col-md-order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; } :host(.ngx-grid) .ngx-grid-col-md-order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; } :host(.ngx-grid) .ngx-grid-col-md-order-4 { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; } :host(.ngx-grid) .ngx-grid-col-md-order-5 { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; } :host(.ngx-grid) .ngx-grid-col-md-order-6 { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; } :host(.ngx-grid) .ngx-grid-col-md-order-7 { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; } :host(.ngx-grid) .ngx-grid-col-md-order-8 { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; } :host(.ngx-grid) .ngx-grid-col-md-order-9 { -webkit-box-ordinal-group: 10; -ms-flex-order: 9; order: 9; } :host(.ngx-grid) .ngx-grid-col-md-order-10 { -webkit-box-ordinal-group: 11; -ms-flex-order: 10; order: 10; } :host(.ngx-grid) .ngx-grid-col-md-order-11 { -webkit-box-ordinal-group: 12; -ms-flex-order: 11; order: 11; } :host(.ngx-grid) .ngx-grid-col-md-order-12 { -webkit-box-ordinal-group: 13; -ms-flex-order: 12; order: 12; } :host(.ngx-grid) .ngx-grid-col-md-offset-1 { margin-left: 0%; } :host(.ngx-grid) .ngx-grid-col-md-offset-2 { margin-left: 8.33333%; } :host(.ngx-grid) .ngx-grid-col-md-offset-3 { margin-left: 16.66667%; } :host(.ngx-grid) .ngx-grid-col-md-offset-4 { margin-left: 25%; } :host(.ngx-grid) .ngx-grid-col-md-offset-5 { margin-left: 33.33333%; } :host(.ngx-grid) .ngx-grid-col-md-offset-6 { margin-left: 41.66667%; } :host(.ngx-grid) .ngx-grid-col-md-offset-7 { margin-left: 50%; } :host(.ngx-grid) .ngx-grid-col-md-offset-8 { margin-left: 58.33333%; } :host(.ngx-grid) .ngx-grid-col-md-offset-9 { margin-left: 66.66667%; } :host(.ngx-grid) .ngx-grid-col-md-offset-10 { margin-left: 75%; } :host(.ngx-grid) .ngx-grid-col-md-offset-11 { margin-left: 83.33333%; } :host(.ngx-grid) .ngx-grid-col-md-offset-12 { margin-left: 91.66667%; } } :host(.ngx-grid) .ngx-grid-col-lg-size-1 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-2 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-3 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-4 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-5 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-6 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-7 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-8 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-9 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-10 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-11 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-lg-size-12 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } @media (min-width: 992px) { :host(.ngx-grid) .ngx-grid-col-lg-size-1 { -webkit-box-flex: 0; -ms-flex: 0 0 8.33333%; flex: 0 0 8.33333%; } :host(.ngx-grid) .ngx-grid-col-lg-size-2 { -webkit-box-flex: 0; -ms-flex: 0 0 16.66667%; flex: 0 0 16.66667%; } :host(.ngx-grid) .ngx-grid-col-lg-size-3 { -webkit-box-flex: 0; -ms-flex: 0 0 25%; flex: 0 0 25%; } :host(.ngx-grid) .ngx-grid-col-lg-size-4 { -webkit-box-flex: 0; -ms-flex: 0 0 33.33333%; flex: 0 0 33.33333%; } :host(.ngx-grid) .ngx-grid-col-lg-size-5 { -webkit-box-flex: 0; -ms-flex: 0 0 41.66667%; flex: 0 0 41.66667%; } :host(.ngx-grid) .ngx-grid-col-lg-size-6 { -webkit-box-flex: 0; -ms-flex: 0 0 50%; flex: 0 0 50%; } :host(.ngx-grid) .ngx-grid-col-lg-size-7 { -webkit-box-flex: 0; -ms-flex: 0 0 58.33333%; flex: 0 0 58.33333%; } :host(.ngx-grid) .ngx-grid-col-lg-size-8 { -webkit-box-flex: 0; -ms-flex: 0 0 66.66667%; flex: 0 0 66.66667%; } :host(.ngx-grid) .ngx-grid-col-lg-size-9 { -webkit-box-flex: 0; -ms-flex: 0 0 75%; flex: 0 0 75%; } :host(.ngx-grid) .ngx-grid-col-lg-size-10 { -webkit-box-flex: 0; -ms-flex: 0 0 83.33333%; flex: 0 0 83.33333%; } :host(.ngx-grid) .ngx-grid-col-lg-size-11 { -webkit-box-flex: 0; -ms-flex: 0 0 91.66667%; flex: 0 0 91.66667%; } :host(.ngx-grid) .ngx-grid-col-lg-size-12 { -webkit-box-flex: 0; -ms-flex: 0 0 100%; flex: 0 0 100%; } :host(.ngx-grid) .ngx-grid-col-lg-order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; } :host(.ngx-grid) .ngx-grid-col-lg-order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; } :host(.ngx-grid) .ngx-grid-col-lg-order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; } :host(.ngx-grid) .ngx-grid-col-lg-order-4 { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; } :host(.ngx-grid) .ngx-grid-col-lg-order-5 { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; } :host(.ngx-grid) .ngx-grid-col-lg-order-6 { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; } :host(.ngx-grid) .ngx-grid-col-lg-order-7 { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; } :host(.ngx-grid) .ngx-grid-col-lg-order-8 { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; } :host(.ngx-grid) .ngx-grid-col-lg-order-9 { -webkit-box-ordinal-group: 10; -ms-flex-order: 9; order: 9; } :host(.ngx-grid) .ngx-grid-col-lg-order-10 { -webkit-box-ordinal-group: 11; -ms-flex-order: 10; order: 10; } :host(.ngx-grid) .ngx-grid-col-lg-order-11 { -webkit-box-ordinal-group: 12; -ms-flex-order: 11; order: 11; } :host(.ngx-grid) .ngx-grid-col-lg-order-12 { -webkit-box-ordinal-group: 13; -ms-flex-order: 12; order: 12; } :host(.ngx-grid) .ngx-grid-col-lg-offset-1 { margin-left: 0%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-2 { margin-left: 8.33333%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-3 { margin-left: 16.66667%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-4 { margin-left: 25%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-5 { margin-left: 33.33333%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-6 { margin-left: 41.66667%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-7 { margin-left: 50%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-8 { margin-left: 58.33333%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-9 { margin-left: 66.66667%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-10 { margin-left: 75%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-11 { margin-left: 83.33333%; } :host(.ngx-grid) .ngx-grid-col-lg-offset-12 { margin-left: 91.66667%; } } :host(.ngx-grid) .ngx-grid-col-xl-size-1 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-2 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-3 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-4 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-5 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-6 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-7 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-8 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-9 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-10 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-11 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } :host(.ngx-grid) .ngx-grid-col-xl-size-12 { position: relative; min-height: 1px; padding-left: 0.9375rem; padding-right: 0.9375rem; box-sizing: border-box; } @media (min-width: 1200px) { :host(.ngx-grid) .ngx-grid-col-xl-size-1 { -webkit-box-flex: 0; -ms-flex: 0 0 8.33333%; flex: 0 0 8.33333%; } :host(.ngx-grid) .ngx-grid-col-xl-size-2 { -webkit-box-flex: 0; -ms-flex: 0 0 16.66667%; flex: 0 0 16.66667%; } :host(.ngx-grid) .ngx-grid-col-xl-size-3 { -webkit-box-flex: 0; -ms-flex: 0 0 25%; flex: 0 0 25%; } :host(.ngx-grid) .ngx-grid-col-xl-size-4 { -webkit-box-flex: 0; -ms-flex: 0 0 33.33333%; flex: 0 0 33.33333%; } :host(.ngx-grid) .ngx-grid-col-xl-size-5 { -webkit-box-flex: 0; -ms-flex: 0 0 41.66667%; flex: 0 0 41.66667%; } :host(.ngx-grid) .ngx-grid-col-xl-size-6 { -webkit-box-flex: 0; -ms-flex: 0 0 50%; flex: 0 0 50%; } :host(.ngx-grid) .ngx-grid-col-xl-size-7 { -webkit-box-flex: 0; -ms-flex: 0 0 58.33333%; flex: 0 0 58.33333%; } :host(.ngx-grid) .ngx-grid-col-xl-size-8 { -webkit-box-flex: 0; -ms-flex: 0 0 66.66667%; flex: 0 0 66.66667%; } :host(.ngx-grid) .ngx-grid-col-xl-size-9 { -webkit-box-flex: 0; -ms-flex: 0 0 75%; flex: 0 0 75%; } :host(.ngx-grid) .ngx-grid-col-xl-size-10 { -webkit-box-flex: 0; -ms-flex: 0 0 83.33333%; flex: 0 0 83.33333%; } :host(.ngx-grid) .ngx-grid-col-xl-size-11 { -webkit-box-flex: 0; -ms-flex: 0 0 91.66667%; flex: 0 0 91.66667%; } :host(.ngx-grid) .ngx-grid-col-xl-size-12 { -webkit-box-flex: 0; -ms-flex: 0 0 100%; flex: 0 0 100%; } :host(.ngx-grid) .ngx-grid-col-xl-order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; } :host(.ngx-grid) .ngx-grid-col-xl-order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; } :host(.ngx-grid) .ngx-grid-col-xl-order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; } :host(.ngx-grid) .ngx-grid-col-xl-order-4 { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; } :host(.ngx-grid) .ngx-grid-col-xl-order-5 { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; } :host(.ngx-grid) .ngx-grid-col-xl-order-6 { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; } :host(.ngx-grid) .ngx-grid-col-xl-order-7 { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; } :host(.ngx-grid) .ngx-grid-col-xl-order-8 { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; } :host(.ngx-grid) .ngx-grid-col-xl-order-9 { -webkit-box-ordinal-group: 10; -ms-flex-order: 9; order: 9; } :host(.ngx-grid) .ngx-grid-col-xl-order-10 { -webkit-box-ordinal-group: 11; -ms-flex-order: 10; order: 10; } :host(.ngx-grid) .ngx-grid-col-xl-order-11 { -webkit-box-ordinal-group: 12; -ms-flex-order: 11; order: 11; } :host(.ngx-grid) .ngx-grid-col-xl-order-12 { -webkit-box-ordinal-group: 13; -ms-flex-order: 12; order: 12; } :host(.ngx-grid) .ngx-grid-col-xl-offset-1 { margin-left: 0%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-2 { margin-left: 8.33333%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-3 { margin-left: 16.66667%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-4 { margin-left: 25%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-5 { margin-left: 33.33333%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-6 { margin-left: 41.66667%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-7 { margin-left: 50%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-8 { margin-left: 58.33333%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-9 { margin-left: 66.66667%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-10 { margin-left: 75%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-11 { margin-left: 83.33333%; } :host(.ngx-grid) .ngx-grid-col-xl-offset-12 { margin-left: 91.66667%; } } :host(.ngx-grid) .ngx-grid-col-xs-align-self-auto { -ms-flex-item-align: auto; align-self: auto; } :host(.ngx-grid) .ngx-grid-col-xs-align-self-flex-start { -ms-flex-item-align: start; align-self: flex-start; } :host(.ngx-grid) .ngx-grid-col-xs-align-self-flex-end { -ms-flex-item-align: end; align-self: flex-end; } :host(.ngx-grid) .ngx-grid-col-xs-align-self-center { -ms-flex-item-align: center; align-self: center; } :host(.ngx-grid) .ngx-grid-col-xs-align-self-baseline { -ms-flex-item-align: baseline; align-self: baseline; } :host(.ngx-grid) .ngx-grid-col-xs-align-self-stretch { -ms-flex-item-align: stretch; align-self: stretch; } :host(.ngx-grid) .ngx-grid-row-xs-justify-content-flex-start { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-xs-justify-content-flex-end { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-xs-justify-content-center { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; } :host(.ngx-grid) .ngx-grid-row-xs-justify-content-space-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; } :host(.ngx-grid) .ngx-grid-row-xs-justify-content-space-around { -ms-flex-pack: distribute; justify-content: space-around; } :host(.ngx-grid) .ngx-grid-row-xs-align-content-flex-start { -ms-flex-line-pack: start; align-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-xs-align-content-flex-end { -ms-flex-line-pack: end; align-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-xs-align-content-center { -ms-flex-line-pack: center; align-content: center; } :host(.ngx-grid) .ngx-grid-row-xs-align-content-space-between { -ms-flex-line-pack: justify; align-content: space-between; } :host(.ngx-grid) .ngx-grid-row-xs-align-content-space-around { -ms-flex-line-pack: distribute; align-content: space-around; } :host(.ngx-grid) .ngx-grid-row-xs-align-items-flex-start { -webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start; } :host(.ngx-grid) .ngx-grid-row-xs-align-items-flex-end { -webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end; } :host(.ngx-grid) .ngx-grid-row-xs-align-items-center { -webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center; } :host(.ngx-grid) .ngx-grid-row-xs-align-items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline; } :host(.ngx-grid) .ngx-grid-row-xs-align-items-stretch { -webkit-box-align: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch; } @media (min-width: 544px) { :host(.ngx-grid) .ngx-grid-col-sm-align-self-auto { -ms-flex-item-align: auto; align-self: auto; } :host(.ngx-grid) .ngx-grid-col-sm-align-self-flex-start { -ms-flex-item-align: start; align-self: flex-start; } :host(.ngx-grid) .ngx-grid-col-sm-align-self-flex-end { -ms-flex-item-align: end; align-self: flex-end; } :host(.ngx-grid) .ngx-grid-col-sm-align-self-center { -ms-flex-item-align: center; align-self: center; } :host(.ngx-grid) .ngx-grid-col-sm-align-self-baseline { -ms-flex-item-align: baseline; align-self: baseline; } :host(.ngx-grid) .ngx-grid-col-sm-align-self-stretch { -ms-flex-item-align: stretch; align-self: stretch; } :host(.ngx-grid) .ngx-grid-row-sm-justify-content-flex-start { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-sm-justify-content-flex-end { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-sm-justify-content-center { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; } :host(.ngx-grid) .ngx-grid-row-sm-justify-content-space-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; } :host(.ngx-grid) .ngx-grid-row-sm-justify-content-space-around { -ms-flex-pack: distribute; justify-content: space-around; } :host(.ngx-grid) .ngx-grid-row-sm-align-content-flex-start { -ms-flex-line-pack: start; align-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-sm-align-content-flex-end { -ms-flex-line-pack: end; align-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-sm-align-content-center { -ms-flex-line-pack: center; align-content: center; } :host(.ngx-grid) .ngx-grid-row-sm-align-content-space-between { -ms-flex-line-pack: justify; align-content: space-between; } :host(.ngx-grid) .ngx-grid-row-sm-align-content-space-around { -ms-flex-line-pack: distribute; align-content: space-around; } :host(.ngx-grid) .ngx-grid-row-sm-align-items-flex-start { -webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start; } :host(.ngx-grid) .ngx-grid-row-sm-align-items-flex-end { -webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end; } :host(.ngx-grid) .ngx-grid-row-sm-align-items-center { -webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center; } :host(.ngx-grid) .ngx-grid-row-sm-align-items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline; } :host(.ngx-grid) .ngx-grid-row-sm-align-items-stretch { -webkit-box-align: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch; } } @media (min-width: 768px) { :host(.ngx-grid) .ngx-grid-col-md-align-self-auto { -ms-flex-item-align: auto; align-self: auto; } :host(.ngx-grid) .ngx-grid-col-md-align-self-flex-start { -ms-flex-item-align: start; align-self: flex-start; } :host(.ngx-grid) .ngx-grid-col-md-align-self-flex-end { -ms-flex-item-align: end; align-self: flex-end; } :host(.ngx-grid) .ngx-grid-col-md-align-self-center { -ms-flex-item-align: center; align-self: center; } :host(.ngx-grid) .ngx-grid-col-md-align-self-baseline { -ms-flex-item-align: baseline; align-self: baseline; } :host(.ngx-grid) .ngx-grid-col-md-align-self-stretch { -ms-flex-item-align: stretch; align-self: stretch; } :host(.ngx-grid) .ngx-grid-row-md-justify-content-flex-start { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-md-justify-content-flex-end { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-md-justify-content-center { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; } :host(.ngx-grid) .ngx-grid-row-md-justify-content-space-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; } :host(.ngx-grid) .ngx-grid-row-md-justify-content-space-around { -ms-flex-pack: distribute; justify-content: space-around; } :host(.ngx-grid) .ngx-grid-row-md-align-content-flex-start { -ms-flex-line-pack: start; align-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-md-align-content-flex-end { -ms-flex-line-pack: end; align-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-md-align-content-center { -ms-flex-line-pack: center; align-content: center; } :host(.ngx-grid) .ngx-grid-row-md-align-content-space-between { -ms-flex-line-pack: justify; align-content: space-between; } :host(.ngx-grid) .ngx-grid-row-md-align-content-space-around { -ms-flex-line-pack: distribute; align-content: space-around; } :host(.ngx-grid) .ngx-grid-row-md-align-items-flex-start { -webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start; } :host(.ngx-grid) .ngx-grid-row-md-align-items-flex-end { -webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end; } :host(.ngx-grid) .ngx-grid-row-md-align-items-center { -webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center; } :host(.ngx-grid) .ngx-grid-row-md-align-items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline; } :host(.ngx-grid) .ngx-grid-row-md-align-items-stretch { -webkit-box-align: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch; } } @media (min-width: 992px) { :host(.ngx-grid) .ngx-grid-col-lg-align-self-auto { -ms-flex-item-align: auto; align-self: auto; } :host(.ngx-grid) .ngx-grid-col-lg-align-self-flex-start { -ms-flex-item-align: start; align-self: flex-start; } :host(.ngx-grid) .ngx-grid-col-lg-align-self-flex-end { -ms-flex-item-align: end; align-self: flex-end; } :host(.ngx-grid) .ngx-grid-col-lg-align-self-center { -ms-flex-item-align: center; align-self: center; } :host(.ngx-grid) .ngx-grid-col-lg-align-self-baseline { -ms-flex-item-align: baseline; align-self: baseline; } :host(.ngx-grid) .ngx-grid-col-lg-align-self-stretch { -ms-flex-item-align: stretch; align-self: stretch; } :host(.ngx-grid) .ngx-grid-row-lg-justify-content-flex-start { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-lg-justify-content-flex-end { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-lg-justify-content-center { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; } :host(.ngx-grid) .ngx-grid-row-lg-justify-content-space-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; } :host(.ngx-grid) .ngx-grid-row-lg-justify-content-space-around { -ms-flex-pack: distribute; justify-content: space-around; } :host(.ngx-grid) .ngx-grid-row-lg-align-content-flex-start { -ms-flex-line-pack: start; align-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-lg-align-content-flex-end { -ms-flex-line-pack: end; align-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-lg-align-content-center { -ms-flex-line-pack: center; align-content: center; } :host(.ngx-grid) .ngx-grid-row-lg-align-content-space-between { -ms-flex-line-pack: justify; align-content: space-between; } :host(.ngx-grid) .ngx-grid-row-lg-align-content-space-around { -ms-flex-line-pack: distribute; align-content: space-around; } :host(.ngx-grid) .ngx-grid-row-lg-align-items-flex-start { -webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start; } :host(.ngx-grid) .ngx-grid-row-lg-align-items-flex-end { -webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end; } :host(.ngx-grid) .ngx-grid-row-lg-align-items-center { -webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center; } :host(.ngx-grid) .ngx-grid-row-lg-align-items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline; } :host(.ngx-grid) .ngx-grid-row-lg-align-items-stretch { -webkit-box-align: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch; } } @media (min-width: 1200px) { :host(.ngx-grid) .ngx-grid-col-xl-align-self-auto { -ms-flex-item-align: auto; align-self: auto; } :host(.ngx-grid) .ngx-grid-col-xl-align-self-flex-start { -ms-flex-item-align: start; align-self: flex-start; } :host(.ngx-grid) .ngx-grid-col-xl-align-self-flex-end { -ms-flex-item-align: end; align-self: flex-end; } :host(.ngx-grid) .ngx-grid-col-xl-align-self-center { -ms-flex-item-align: center; align-self: center; } :host(.ngx-grid) .ngx-grid-col-xl-align-self-baseline { -ms-flex-item-align: baseline; align-self: baseline; } :host(.ngx-grid) .ngx-grid-col-xl-align-self-stretch { -ms-flex-item-align: stretch; align-self: stretch; } :host(.ngx-grid) .ngx-grid-row-xl-justify-content-flex-start { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-xl-justify-content-flex-end { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-xl-justify-content-center { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; } :host(.ngx-grid) .ngx-grid-row-xl-justify-content-space-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; } :host(.ngx-grid) .ngx-grid-row-xl-justify-content-space-around { -ms-flex-pack: distribute; justify-content: space-around; } :host(.ngx-grid) .ngx-grid-row-xl-align-content-flex-start { -ms-flex-line-pack: start; align-content: flex-start; } :host(.ngx-grid) .ngx-grid-row-xl-align-content-flex-end { -ms-flex-line-pack: end; align-content: flex-end; } :host(.ngx-grid) .ngx-grid-row-xl-align-content-center { -ms-flex-line-pack: center; align-content: center; } :host(.ngx-grid) .ngx-grid-row-xl-align-content-space-between { -ms-flex-line-pack: justify; align-content: space-between; } :host(.ngx-grid) .ngx-grid-row-xl-align-content-space-around { -ms-flex-line-pack: distribute; align-content: space-around; } :host(.ngx-grid) .ngx-grid-row-xl-align-items-flex-start { -webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start; } :host(.ngx-grid) .ngx-grid-row-xl-align-items-flex-end { -webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end; } :host(.ngx-grid) .ngx-grid-row-xl-align-items-center { -webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center; } :host(.ngx-grid) .ngx-grid-row-xl-align-items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline; } :host(.ngx-grid) .ngx-grid-row-xl-align-items-stretch { -webkit-box-align: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch; } }"

/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = "<ng-content></ng-content>";

/***/ },

/***/ 948:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_row_directive__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_column_directive__ = __webpack_require__(205);

/* harmony export */ __webpack_require__.d(exports, "NGX_GRID_DIRECTIVES", function() { return NGX_GRID_DIRECTIVES; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__grid_component__) if(["NGX_GRID_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__grid_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__grid_row_directive__) if(["NGX_GRID_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_1__grid_row_directive__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__grid_column_directive__) if(["NGX_GRID_DIRECTIVES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_2__grid_column_directive__[key]; }) }(__WEBPACK_IMPORT_KEY__));








var NGX_GRID_DIRECTIVES = [
  __WEBPACK_IMPORTED_MODULE_0__grid_component__["ngxGridComponent"],
  __WEBPACK_IMPORTED_MODULE_1__grid_row_directive__["ngxGridRowDirective"],
  __WEBPACK_IMPORTED_MODULE_2__grid_column_directive__["ngxGridColumnDirective"]
];

/***/ }

},[948]);