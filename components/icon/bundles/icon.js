webpackJsonp([12],{

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);

/* harmony export */ __webpack_require__.d(exports, "ngxIconService", function() { return ngxIconService; });



function _ngxIconService() {
  var _defaultFontSet = '',
      _iconFontAlias = {};

  var _svgIconConfigs = {},
      _svgIconSetConfigs = {},
      _cachedSvgIcons = {},
      /* Used by _svgIconConfig to coalesce multiple requests to the same URL. */
      _fetchingSvgIcons = {};

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],

    function ngxIconService(httpService) {
      this.httpService = httpService;
    }
  ];

  this.setDefaultFontSet = function (className) {
    _defaultFontSet = className;
    return this;
  };
  this.getDefaultFontSet = function () {
    return _defaultFontSet;
  };

  this.setIconFontAlias = function (alias, className) {
    _iconFontAlias[alias] = className || alias;
    return this;
  };
  this.getIconFontClass = function (alias) {
    return _iconFontAlias[alias] || alias;
  };


  this.setSvgIcon = function (url, iconName, namespace) {
    _svgIconConfigs[_getIconKey(iconName, namespace)] = new _svgIconConfig(url);
    return this;
  };
  this.getSvgIconByUrl = function (url) {
    if(_cachedSvgIcons.hasOwnProperty(url)){
      return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].of(_cachedSvgIcons[url]);
    }
    
    return new _svgIconConfig(url)
    .getSvgElement(this)
    .do(function (svgElement) {
      _cachedSvgIcons[url] = svgElement;
    });
  };
  this.getSvgIconByName = function (iconName, namespace) {
    var _iconKey = _getIconKey(iconName, namespace);
    
    if(_svgIconConfigs.hasOwnProperty(_iconKey)){
      return _svgIconConfigs[_iconKey]
      .getSvgElement(this)
      .do(function (svgElement) {
        _cachedSvgIcons[_svgIconConfigs[_iconKey].getUrl()] = svgElement;
      });
    }
    
    if (_svgIconSetConfigs.hasOwnProperty(namespace)) {
      var _svgIconSets = _svgIconSetConfigs[namespace],
          _svgIconSetsHaveNoElement = [],
          _svgIconSet,
          _svgElement;

      for (var i = 0; i < _svgIconSets.length; i++) {
        _svgIconSet = _svgIconSets[i];

        if(_svgIconSet.hasSvgElement()){
          _svgElement = _svgIconSet.querySvgElement(iconName);
          if(_svgElement){ return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].of(_svgElement); }
        }
        else {
          _svgIconSetsHaveNoElement.push(_svgIconSet);
        } 
      }

      var _getSvgElement$ = [];
      for (i = 0; i < _svgIconSetsHaveNoElement.length; i++) {
        _getSvgElement$.push(_svgIconSets[i].getSvgElement(this));
      }

      return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].forkJoin(_getSvgElement$)
      .map(function () {
        for (var i = 0; i < _svgIconSetsHaveNoElement.length; i++) {
          _svgIconSet = _svgIconSets[i];
          
          if(_svgIconSet.hasSvgElement()){
            _svgElement = _svgIconSet.querySvgElement(iconName);
            if(_svgElement){ return _svgElement; }
          }
        }

        return null;
      });
    }
  };

  this.setSvgIconSet = function (url, namespace) {
    var _namespace = namespace || '';

    if(_svgIconSetConfigs.hasOwnProperty(_namespace)){
      _svgIconSetConfigs[_namespace].push(new _svgIconConfig(url));
    }
    else{
      _svgIconSetConfigs[_namespace] = [new _svgIconConfig(url)];
    }

    return this;
  };


  function _getIconKey(iconName, namespace) {
    return (namespace || '') + ':' + iconName;
  }

  function _svgIconConfig(url) {
    var _svgElement, 
        _url = url;

    this.getUrl = function () { return _url; };

    this.hasSvgElement = function () { return _svgElement !== null && _svgElement !== undefined; };

    this.querySvgElement = function (id) {
      var _result = (_svgElement && id) ? _svgElement.querySelector('#' + id) : null;
      if(!_result){ return null; }

      if (_result.tagName.toLowerCase() === 'svg') {
        return _setAttributes(_result.cloneNode(true));
      }

      _result = _toSvgElement('<svg></svg>').appendChild(_result.cloneNode(true));
      return _setAttributes(_result);
    };

    this.getSvgElement = function (context) {
      if(_svgElement){ 
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].of(_svgElement.cloneNode(true)); 
      }

      return _fetch(context, _url)
      .map(function (svgStr) {
        _svgElement = _toSvgElement(svgStr);
        if(!_svgElement){ return null; }

        return _setAttributes(_svgElement).cloneNode(true);
      });
    };

    function _toSvgElement(svgStr) {
      var _div = document.createElement('div');
      _div.innerHTML = svgStr;

      return _div.querySelector('svg');
    }

    function _setAttributes(svgElement) {
      if (!svgElement.getAttribute('xmlns')) {
        svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      }
      svgElement.setAttribute('fit', '');
      svgElement.setAttribute('height', '100%');
      svgElement.setAttribute('width', '100%');
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svgElement.setAttribute('focusable', 'false');

      return svgElement;
    }

    function _fetch(context, url) {
      if (_fetchingSvgIcons.hasOwnProperty(url)) {
        return _fetchingSvgIcons[url];
      }

      var _request = context.httpService.get(url)
          .map(function (response) {
            return response.text();
          })
          .finally(function () {
            delete _fetchingSvgIcons[url];
          })
          .share();

      _fetchingSvgIcons[url] = _request;

      return _request;
    }
  }
}

var ngxIconService = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Class"](new _ngxIconService());

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_icon_service__ = __webpack_require__(129);

/* harmony export */ __webpack_require__.d(exports, "ngxIconComponent", function() { return ngxIconComponent; });



function _ngxIconComponent() {
  var _base, _STYLE_PROPERTIES;
  var _PROPERTIES = {
    SVG_SRC: 'svgSrc',
    SVG_ICON: 'svgIcon'
  };

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
    __WEBPACK_IMPORTED_MODULE_2__services_icon_service__["ngxIconService"],

    function ngxIconComponent(elementRef, renderer, ngxIconService) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, arguments);

      if (elementRef) {
        this.ngxIconService = ngxIconService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    if(changeRecord.hasOwnProperty(_PROPERTIES.SVG_SRC) || changeRecord.hasOwnProperty(_PROPERTIES.SVG_ICON)){
      var _self = this;

      if (changeRecord.hasOwnProperty(_PROPERTIES.SVG_ICON)) {
        var _parts = _splitIconKey(this.svgIcon);

        this.ngxIconService.getSvgIconByName(_parts.iconName, _parts.namespace)
        .subscribe(function(svgElement){
          _setSvgElement(_self, svgElement);
        });
      } 
      else {
        this.ngxIconService.getSvgIconByUrl(this.svgSrc)
        .subscribe(function(svgElement){
          _setSvgElement(_self, svgElement);
        });
      }
    }
    else {
      var _styleProperties = this.getStyleProperties();

      if(changeRecord.hasOwnProperty(_styleProperties.FONT_SET)){
        this.buildChangeRecord
        (
          _styleProperties.FONT_SET, 
          this.ngxIconService.getIconFontClass(changeRecord[_styleProperties.FONT_SET].currentValue), 
          null, 
          changeRecord
        );
      }

      if(changeRecord.hasOwnProperty(_styleProperties.FONT_ICON)){
        this.buildChangeRecord
        (
          _styleProperties.FONT_ICON, 
          changeRecord[_styleProperties.FONT_ICON].currentValue, 
          null, 
          changeRecord
        );
      }
    }

    _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
  };

  this.initDefaultValues = function(){
    var _changeRecord;
    if (!this.svgSrc && !this.svgIcon && !this.fontSet) {
      var _iconFontClass = this.ngxIconService.getIconFontClass(this.ngxIconService.getDefaultFontSet());
      _changeRecord = this.buildChangeRecord(this.getStyleProperties().FONT_SET, _iconFontClass);
    }

    return _changeRecord;
  };

  this.needRebuildCssClass = function(changeRecord){
    var _styleProperties = this.getStyleProperties();

    return changeRecord.hasOwnProperty(_styleProperties.FONT_ICON) || 
    changeRecord.hasOwnProperty(_styleProperties.FONT_SET) || 
    _getBaseInstance(this).needRebuildCssClass.apply(this, arguments);
  };

  this.buildCssClassForProperty = function(propertyName, propertyValue){
    var _styleProperties = this.getStyleProperties();

    if(propertyName === _styleProperties.FONT_SET || propertyName === _styleProperties.FONT_ICON){
      return propertyValue;
    }
    else{
      _getBaseInstance(this).buildCssClassForProperty.apply(this, arguments);
    }
  };

  this.getPrefixClass = function () {
    return 'ngx-icon';
  };

  this.getStyleProperties = function(){
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = {
        FONT_SET: 'fontSet',
        FONT_ICON: 'fontIcon'
      };

      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
    }

    return _STYLE_PROPERTIES;
  };

  function _splitIconKey(iconKey) {
    if (!iconKey) { return { namespace: '', iconName: '' }; }
    
    var _parts = iconKey.split(':');
    switch (_parts.length) {
      case 1:
        return { namespace: '', iconName: _parts[0] };
      case 2:
        return { namespace: _parts[0], iconName: _parts[1] };
      default:
        throw 'Invalid icon key';
    }
  }

  function _setSvgElement(context, svgElement) {
    var _nativeElement = context.elementRef.nativeElement;
    
    _nativeElement.innerHTML = '';
    _nativeElement.appendChild(svgElement);
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}

var ngxIconComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'ngx-icon',
  template: __webpack_require__(704),
  styles: [__webpack_require__(523)],
  properties: [
    'alt',
    'svgSrc:svg-src',
    'svgIcon:svg-icon',
    'fontSet:font-set',
    'fontIcon:font-icon',
    'prefixClass:prefix-class'
  ]
})
.Class(new _ngxIconComponent());

/***/ },

/***/ 523:
/***/ function(module, exports) {

module.exports = ":host(.ngx-icon) { display: inline-block; background-repeat: no-repeat; fill: currentColor; width: 1.5em; height: 1.5em; }"

/***/ },

/***/ 704:
/***/ function(module, exports) {

module.exports = "<ng-content></ng-content>";

/***/ },

/***/ 951:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_icon_service__ = __webpack_require__(129);

/* harmony export */ __webpack_require__.d(exports, "NGX_ICON_DIRECTIVES", function() { return NGX_ICON_DIRECTIVES; });
/* harmony export */ __webpack_require__.d(exports, "NGX_ICON_PROVIDERS", function() { return NGX_ICON_PROVIDERS; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__icon_component__) if(["NGX_ICON_DIRECTIVES","NGX_ICON_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__icon_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__services_icon_service__) if(["NGX_ICON_DIRECTIVES","NGX_ICON_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_1__services_icon_service__[key]; }) }(__WEBPACK_IMPORT_KEY__));






var NGX_ICON_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__icon_component__["ngxIconComponent"]];
var NGX_ICON_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_1__services_icon_service__["ngxIconService"]];

/***/ }

},[951]);