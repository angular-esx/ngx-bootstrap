webpackJsonp([10],{

/***/ 230:
/***/ function(module, exports) {

module.exports = ":host(.ngx-backdrop).ngx-backdrop-state-active { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1040; } :host(.ngx-backdrop).ngx-backdrop-state-active.ngx-backdrop-color-default { background-color: rgba(0, 0, 0, 0.5); } :host(.ngx-backdrop).ngx-backdrop-state-active.ngx-backdrop-color-transparent { background-color: transparent; }"

/***/ },

/***/ 332:
/***/ function(module, exports) {

module.exports = "<ng-content></ng-content>";

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__backdrop_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backdrop_observer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backdrop_service__ = __webpack_require__(79);

/* harmony export */ __webpack_require__.d(exports, "NGX_BACKDROP_DIRECTIVES", function() { return NGX_BACKDROP_DIRECTIVES; });
/* harmony export */ __webpack_require__.d(exports, "NGX_BACKDROP_PROVIDERS", function() { return NGX_BACKDROP_PROVIDERS; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__backdrop_component__) if(["NGX_BACKDROP_DIRECTIVES","NGX_BACKDROP_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__backdrop_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__services_backdrop_observer__) if(["NGX_BACKDROP_DIRECTIVES","NGX_BACKDROP_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_1__services_backdrop_observer__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__services_backdrop_service__) if(["NGX_BACKDROP_DIRECTIVES","NGX_BACKDROP_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_2__services_backdrop_service__[key]; }) }(__WEBPACK_IMPORT_KEY__));








var NGX_BACKDROP_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_0__backdrop_component__["ngxBackdropComponent"]];
var NGX_BACKDROP_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_1__services_backdrop_observer__["ngxBackdropObserver"], __WEBPACK_IMPORTED_MODULE_2__services_backdrop_service__["ngxBackdropService"]];

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxBackdropObserver", function() { return ngxBackdropObserver; });



function _ngxBackdropObserver() {
  var _observer;
  var _ACTIONS = {
    SHOW_BACKDROP: 'SHOW_BACKDROP',
    HIDE_BACKDROP: 'HIDE_BACKDROP',
    CLICK_BACKDROP: 'CLICK_BACKDROP'
  };

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_2__cores__["ngxAnimationService"],

    function ngxBackdropObserver(ngxAnimationService) {
      __WEBPACK_IMPORTED_MODULE_2__cores__["ngxUtils"].shallowCopy(this, ngxAnimationService);

      this.ngxBackdrop$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"](function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return __WEBPACK_IMPORTED_MODULE_2__cores__["ngxUtils"].shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    if (_observer) { _observer.next(event); }
  };

  this.getShow$ = function () {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].from([{ type: _ACTIONS.SHOW_BACKDROP }]);
  };
  this.show = function () {
    this.next({ type: _ACTIONS.SHOW_BACKDROP });
  };

  this.getHide$ = function () {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].from([{ type: _ACTIONS.HIDE_BACKDROP }]);
  };
  this.hide = function () {
    this.next({ type: _ACTIONS.HIDE_BACKDROP });
  };

  this.getClick$ = function (isActive) {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].from([{ isActive: isActive, type: _ACTIONS.CLICK_BACKDROP }]);
  };
  this.click = function (isActive) {
    this.next({ isActive: isActive, type: _ACTIONS.CLICK_BACKDROP });
  };
}

var ngxBackdropObserver = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Class"](new _ngxBackdropObserver());

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backdrop_observer__ = __webpack_require__(40);

/* harmony export */ __webpack_require__.d(exports, "ngxBackdropComponent", function() { return ngxBackdropComponent; });



function _ngxBackdropComponent() {
  var _base;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
    __WEBPACK_IMPORTED_MODULE_2__services_backdrop_observer__["ngxBackdropObserver"],

    function ngxBackdropComponent(elementRef, renderer, ngxBackdropObserver) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, arguments);

      if (elementRef) {
        this.ngxBackdropObserver = ngxBackdropObserver;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _self = this,
        _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');

    if (this.isActive) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);

      this.ngxBackdropObserver.fadeIn(this.elementRef);
    }
    else {
      this.ngxBackdropObserver.fadeOut(this.elementRef).then(function () {
        _getBaseInstance(_self).ngOnChanges.apply(_self, [changeRecord]);
      });
    }
  };

  this.ngOnInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngOnInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    _getBaseInstance(this).ngOnDestroy.apply(this);
  };

  this.initDefaultValues = function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    }
    
    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.state) && __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.isActive)) {
      this.isActive = false;
    }

    return _changeRecord;
  };

  this.getPrefixClass = function () {
    return 'ngx-backdrop';
  };

  this.subscribe = function () {
    var _self = this;

    this.subscription = this.ngxBackdropObserver.ngxBackdrop$.subscribe(function (event) {
      if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(event)) { return; }

      var _events = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isArray(event) ? event : [event];
      var _actions = _self.ngxBackdropObserver.getActions();
      
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].forEach(_events, function (_event) {
        if (_event.type === _actions.SHOW_BACKDROP) {
          _self.show();
        }
        else if (_event.type === _actions.HIDE_BACKDROP) {
          _self.hide();
        }
      });
    });
  };

  this.show = function () {
    if (this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.addValueToProperty(_styleProperties.STATE, 'active');

    var _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    this.buildChangeRecord(_styleProperties.STATE, this.state, null, _changeRecord);

    this.ngOnChanges(_changeRecord);
  };

  this.hide = function () {
    if (!this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.removeValueFromProperty(_styleProperties.STATE, 'active');

    var _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    this.buildChangeRecord(_styleProperties.STATE, this.state, null, _changeRecord);

    this.ngOnChanges(_changeRecord);
  };

  this.click = function () {
    this.ngxBackdropObserver.click(this.isActive);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}

var ngxBackdropComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'ngx-backdrop',
  template: __webpack_require__(332),
  styles: [__webpack_require__(230)],
  properties: ['color', 'initCssClass:class'],
  host: {
    '(click)': 'click()'
  }
})
.Class(new _ngxBackdropComponent());

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backdrop_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backdrop_observer__ = __webpack_require__(40);

/* harmony export */ __webpack_require__.d(exports, "ngxBackdropService", function() { return ngxBackdropService; });




function _ngxBackdropService() {
  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["DynamicComponentLoader"],
    __WEBPACK_IMPORTED_MODULE_3__backdrop_observer__["ngxBackdropObserver"],

    function ngxBackdropService(dynamicComponentLoader, ngxBackdropObserver) {
      if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(dynamicComponentLoader)) { throw 'dynamicComponentLoader is required'; }
      if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(ngxBackdropObserver)) { throw 'ngxBackdropObserver is required'; }

      this.dynamicComponentLoader = dynamicComponentLoader;
      this.ngxBackdropObserver = ngxBackdropObserver;
    }
  ];

  this.ngOnDestroy = function () {
    if (!__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.backdropRef)) { this.backdropRef.destroy(); }
  };

  this.setRootViewContainerRef = function (rootViewContainerRef) {
    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(rootViewContainerRef)) { throw 'rootViewContainerRef is required'; }

    this.rootViewContainerRef = rootViewContainerRef;

    if (!__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.backdropRef)) {
      this.backdropRef.destroy();
      this.backdropRef = null;
    }
    
    var _self = this,
        _injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([
           new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Provider"](__WEBPACK_IMPORTED_MODULE_3__backdrop_observer__["ngxBackdropObserver"], { useValue: this.ngxBackdropObserver })
        ]);

    return this.dynamicComponentLoader
               .loadNextToLocation(__WEBPACK_IMPORTED_MODULE_2__backdrop_component__["ngxBackdropComponent"], this.rootViewContainerRef, _injector)
               .then(function (backdropRef) { _self.backdropRef = backdropRef; });
  };

  this.getActions = function () {
    return this.ngxBackdropObserver.getActions();
  };

  this.next = function (event) {
    this.ngxBackdropObserver.next(event);
  };

  this.getShow$ = function () {
    return this.ngxBackdropObserver.getShow$();
  };
  this.show = function () {
    this.ngxBackdropObserver.show();
  };

  this.getHide$ = function () {
    return this.ngxBackdropObserver.getHide$();
  };
  this.hide = function () {
    this.ngxBackdropObserver.hide();
  };

  this.onClick = function (handler) {
    var _self = this;
    
    return this.ngxBackdropObserver.ngxBackdrop$.subscribe(function (event) {
      if (!__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(event) && event.type === _self.getActions().CLICK_BACKDROP) {
        handler(event);
      }
    });
  };
}

var ngxBackdropService = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Class"](new _ngxBackdropService());

/***/ }

},[344]);