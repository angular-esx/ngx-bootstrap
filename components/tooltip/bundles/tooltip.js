webpackJsonp([3],{

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return ngxTooltipOption; });


function _ngxTooltipOption() {
  var _PROPERTIES = ['hostElement', 'templateRef', 'content', 'state', 'position', 'delay', 'autoHide'];

  this.constructor = [
    [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), null],

    function ngxTooltipOption(options) {
      if (options) { this.assign(this, options); }
    }
  ];

  this.assign = function (target, options) {
    __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].shallowCopy(target, (options || this), false, function (prop) {
      return _PROPERTIES.indexOf(prop) > -1;
    });
  };
}

var ngxTooltipOption = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Class"](new _ngxTooltipOption());

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_template_directive__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tooltip_service__ = __webpack_require__(34);

/* harmony export */ __webpack_require__.d(exports, "NGX_TOOLTIP_DIRECTIVES", function() { return NGX_TOOLTIP_DIRECTIVES; });
/* harmony export */ __webpack_require__.d(exports, "NGX_TOOLTIP_PROVIDERS", function() { return NGX_TOOLTIP_PROVIDERS; });/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__tooltip_component__) if(["NGX_TOOLTIP_DIRECTIVES","NGX_TOOLTIP_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_0__tooltip_component__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__) if(["NGX_TOOLTIP_DIRECTIVES","NGX_TOOLTIP_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__tooltip_template_directive__) if(["NGX_TOOLTIP_DIRECTIVES","NGX_TOOLTIP_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_2__tooltip_template_directive__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_3__services_tooltip_service__) if(["NGX_TOOLTIP_DIRECTIVES","NGX_TOOLTIP_PROVIDERS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_3__services_tooltip_service__[key]; }) }(__WEBPACK_IMPORT_KEY__));










var NGX_TOOLTIP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__tooltip_component__["ngxTooltipComponent"],
    __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__["ngxTooltipDirective"],
    __WEBPACK_IMPORTED_MODULE_2__tooltip_template_directive__["ngxTooltipTemplateDirective"]
];

var NGX_TOOLTIP_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_3__services_tooltip_service__["ngxTooltipService"]];

/***/ },

/***/ 231:
/***/ function(module, exports) {

module.exports = ":host(.ngx-tooltip) { display: block; position: absolute; opacity: 0; z-index: 1000; font-size: 0.875rem; font-style: normal; font-weight: normal; letter-spacing: normal; line-break: auto; line-height: 1.5; text-align: left; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; white-space: normal; word-break: normal; word-spacing: normal; word-wrap: normal; } :host(.ngx-tooltip) > .ngx-tooltip-arrow { position: absolute; width: 0; height: 0; border-color: transparent; border-style: solid; } :host(.ngx-tooltip) > .ngx-tooltip-content { text-align: center; padding: 3px 8px; max-width: 200px; color: white; background-color: #333333; border-radius: 0.25rem; } :host(.ngx-tooltip).ngx-tooltip-position-top { margin-top: -5px; } :host(.ngx-tooltip).ngx-tooltip-position-top > .ngx-tooltip-arrow { bottom: -5px; left: 50%; margin-left: -5px; border-width: 5px 5px 0; border-top-color: #333333; } :host(.ngx-tooltip).ngx-tooltip-position-right { margin-left: 5px; } :host(.ngx-tooltip).ngx-tooltip-position-right > .ngx-tooltip-arrow { top: 50%; left: -5px; margin-top: -5px; border-width: 5px 5px 5px 0; border-right-color: #333333; } :host(.ngx-tooltip).ngx-tooltip-position-bottom { margin-top: 5px; } :host(.ngx-tooltip).ngx-tooltip-position-bottom > .ngx-tooltip-arrow { top: -5px; left: 50%; margin-left: -5px; border-width: 0 5px 5px; border-bottom-color: #333333; } :host(.ngx-tooltip).ngx-tooltip-position-left { margin-left: -5px; } :host(.ngx-tooltip).ngx-tooltip-position-left > .ngx-tooltip-arrow { top: 50%; right: -5px; margin-top: -5px; border-width: 5px 0 5px 5px; border-left-color: #333333; }"

/***/ },

/***/ 333:
/***/ function(module, exports) {

module.exports = "<div class=\"ngx-tooltip-arrow\"></div>\r\n<div class=\"ngx-tooltip-content\">\r\n  <div #content></div>\r\n</div>";

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cores__ = __webpack_require__(6);

/* harmony export */ __webpack_require__.d(exports, "ngxTooltipService", function() { return ngxTooltipService; });



function _ngxTooltipService() {
  var _templates = {},
      _observer;
  var _ACTIONS = {
    ENABLE_TOOLTIP: 'ENABLE_TOOLTIP',
    SHOW_TOOLTIP: 'SHOW_TOOLTIP',
    HIDE_TOOLTIP: 'HIDE_TOOLTIP',
  };

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_2__cores__["ngxAnimationService"],

    function ngxTooltipService(ngxAnimationService) {
      __WEBPACK_IMPORTED_MODULE_2__cores__["ngxUtils"].shallowCopy(this, ngxAnimationService);

      this.ngxTooltip$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"](function (observer) {
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

  this.getEnable$ = function (tooltipId, isEnabled) {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].from([{ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP }]);
  };
  this.enable = function (tooltipId, isEnabled) {
    this.next({ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP });
  };

  this.getShow$ = function (tooltipId, delay) {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].from([{ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay }]);
  };
  this.show = function (tooltipId, delay) {
    this.next({ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay });
  };

  this.getHide$ = function (tooltipId) {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].from([{ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP }]);
  };
  this.hide = function (tooltipId) {
    this.next({ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP });
  };

  this.cacheTemplateRef = function (id, template) {
    if (id && template) { _templates[id] = template; }
    return this;
  };
  this.getTemplateRef = function (id) {
    return _templates[id];
  };
}

var ngxTooltipService = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Class"](new _ngxTooltipService());

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tooltip_option_model__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tooltip_service__ = __webpack_require__(34);

/* harmony export */ __webpack_require__.d(exports, "ngxTooltipComponent", function() { return ngxTooltipComponent; });




function _ngxTooltipComponent() {
  var _base;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
    __WEBPACK_IMPORTED_MODULE_3__services_tooltip_service__["ngxTooltipService"],
    __WEBPACK_IMPORTED_MODULE_2__models_tooltip_option_model__["a" /* ngxTooltipOption */],

    function ngxTooltipComponent(elementRef, renderer, ngxTooltipService, ngxTooltipOption) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"].apply(this, [elementRef, renderer, ngxTooltipService]);
      
      if (elementRef) {
        this.ngxTooltipService = ngxTooltipService;

        ngxTooltipOption.assign(this);
      }
    }
  ];

  this.ngAfterViewInit = function () {
    this.render();

    var _rect = this.getRect();
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', (_rect.top !== 0 && !_rect.top ? -1000 : _rect.top) + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', (_rect.left !== 0 && !_rect.left ? -1000 : _rect.left) + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', _rect.width + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', _rect.height + 'px');

    var _styleProperties = this.getStyleProperties();
    var _changeRecord = this.buildChangeRecord(_styleProperties.STATE, this.state);
    this.buildChangeRecord(_styleProperties.POSITION, this.position, null, _changeRecord);

    this.ngOnChanges(_changeRecord);

    _getBaseInstance(this).ngAfterViewInit.apply(this);

    this.show();
  };

  this.getPrefixClass = function () {
    return 'ngx-tooltip';
  };

  this.render = function () {
    if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.contentElement)) { throw 'Not found content element of tooltip'; }

    if (this.templateRef) {
      this.contentElement.createEmbeddedView(this.templateRef, 0);
    }
    else {
      this.contentElement.element.nativeElement.innerHTML = this.content;
    }
  };

  this.show = function () {
    var _self = this;
    setTimeout(function () {
      _self.ngxTooltipService.fadeIn(_self.elementRef);
    }, _self.delay);
  };

  this.hide = function () {
    this.ngxTooltipService.fadeOut(this.elementRef);
  };

  this.getRect = function () {
    var _positions = this.position.split(' ');
    if (_positions.length === 1) { _positions[1] = 'center'; }
    
    var _hostElementRect = _getRect(this.hostElement.nativeElement),
        _elementRect = _getRect(this.elementRef.nativeElement);
    
    var _rect;
    switch (_positions[0]) {
      case 'right':
        _rect = {
          top: _shiftHeight(this, _hostElementRect, _elementRect, _positions[1]),
          left: _shiftWidth(this, _hostElementRect, _elementRect, _positions[0])
        };
        break;
      case 'left':
        _rect = {
          top: _shiftHeight(this, _hostElementRect, _elementRect, _positions[1]),
          left: _hostElementRect.left - _elementRect.width
        };
        break;
      case 'bottom':
        _rect = {
          top: _shiftHeight(this, _hostElementRect, _elementRect, _positions[0]),
          left: _shiftWidth(this, _hostElementRect, _elementRect, _positions[1])
        };
        break;
      default:
        _rect = {
          top: _hostElementRect.top - _elementRect.height,
          left: _shiftWidth(this, _hostElementRect, _elementRect, _positions[1])
        };
    }

    _rect.width = _elementRect.width;
    _rect.height = _elementRect.height;

    return _rect;
  };

  function _getRect(nativeElement){
    var _boundingClientRect = nativeElement.getBoundingClientRect();

    return {
      width: _boundingClientRect.width || nativeElement.offsetWidth,
      height: _boundingClientRect.height || nativeElement.offsetHeight,
      top: _boundingClientRect.top + (window.pageYOffset || document.documentElement.scrollTop),
      left: _boundingClientRect.left + (window.pageXOffset || document.documentElement.scrollLeft)
    };
  }

  function _shiftWidth(context, hostElementRect, elementRect, position) {
    switch (position) {
      case 'left':
        return hostElementRect.left;
      case 'right':
        return hostElementRect.left + hostElementRect.width;
      case 'center':
        return  hostElementRect.left + hostElementRect.width / 2 - elementRect.width / 2;
    }
  }

  function _shiftHeight(context, hostElementRect, elementRect, position) {
    switch (position) {
      case 'top':
        return hostElementRect.top;
      case 'bottom':
        return hostElementRect.top + hostElementRect.height;
      case 'center':
        return hostElementRect.top + hostElementRect.height / 2 - elementRect.height / 2;
    }
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseComponent"]); }
    return _base;
  }
}

var ngxTooltipComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
  selector: 'ngx-tooltip',
  template: __webpack_require__(333),
  styles: [__webpack_require__(231)],
  queries: {
    contentElement: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"]('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] })
  }
})
.Class(new _ngxTooltipComponent());

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tooltip_service__ = __webpack_require__(34);

/* harmony export */ __webpack_require__.d(exports, "ngxTooltipTemplateDirective", function() { return ngxTooltipTemplateDirective; });


function _ngxTooltipTemplateDirective() {
  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
    __WEBPACK_IMPORTED_MODULE_1__services_tooltip_service__["ngxTooltipService"],

    function ngxTooltipTemplateDirective(templateRef, ngxTooltipService) {
      if (templateRef) {
        this.templateRef = templateRef;
        this.ngxTooltipService = ngxTooltipService;
      }
    }
  ];

  this.ngOnInit = function () {
    if (this.templateRef) {
      this.ngxTooltipService.cacheTemplateRef(this.id, this.templateRef);
    }
  };
}

var ngxTooltipTemplateDirective = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"]({
  selector: '[ngxTooltipTemplate]',
  properties: ['id']
})
.Class(new _ngxTooltipTemplateDirective());

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tooltip_option_model_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_component_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tooltip_service__ = __webpack_require__(34);

/* harmony export */ __webpack_require__.d(exports, "ngxTooltipDirective", function() { return ngxTooltipDirective; });





function _ngxTooltipDirective() {
  var _base;

  this.extends = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"];

  this.constructor = [
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["DynamicComponentLoader"],
    __WEBPACK_IMPORTED_MODULE_4__services_tooltip_service__["ngxTooltipService"],

    function ngxTooltipDirective(elementRef, renderer, viewContainerRef, componentLoader, ngxTooltipService) {
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"].apply(this, [elementRef, renderer]);
      
      if (elementRef) {
        this.ngxTooltipService = ngxTooltipService;
        this.viewContainerRef = viewContainerRef;
        this.componentLoader = componentLoader;
      }
    }
  ];

  this.ngOnChanges = function(changeRecord){
    var _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');
    this.isDisabled = this.propertyHasValue(_styleProperties.STATE, 'disabled');

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.ngOnInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngOnInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    _getBaseInstance(this).ngOnDestroy.apply(this);
  };

  this.getPrefixClass = function () {
    return 'ngx-tooltip';
  };

  this.initDefaultValues = function(){
    if (this.autoHide === 'true') { this.autoHide = true; }
    else if (this.autoHide === 'false') { this.autoHide = false; }

    if(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.state) && __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.isActive)){ this.isActive = false; }

    if(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(this.state) && __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(this.isDisabled)){ this.isDisabled = false; }

    return null;
  };

  this.subscribe = function () {
    var _self = this;
    this.subscription = this.ngxTooltipService.ngxTooltip$.subscribe(function (event) {
      if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(event)) { return; }

      var _events = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isArray(event) ? event : [event];
      var _actions = _self.ngxTooltipService.getActions();
      
      __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].forEach(_events, function (_event) {
        if (__WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isEmpty(_event.id) || _event.id === _self.id) {
          if (_event.type === _actions.ENABLE_TOOLTIP) {
            _self.enable(_event.isEnabled);
          }
          else if (_event.type === _actions.SHOW_TOOLTIP) {
            _self.show({
              delay: _event.delay,
              autoHide: false
            });
          }
          else if (_event.type === _actions.HIDE_TOOLTIP) {
            _self.hide({ autoHide: true });
          }
        }
      });
    });
  };

  this.enable = function (isEnabled) {
    var _styleProperties = this.getStyleProperties();

    if (isEnabled && this.state && this.isDisabled) {
      this.removeValueFromProperty(_styleProperties.STATE, 'disabled');
    }
    else if (!isEnabled && !this.isDisabled) {
      this.addValueToProperty(_styleProperties.STATE, 'disabled');
    }

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  this.show = function (options) {
    if ((!this.content && !this.template) ||
        this.isActive ||
        this.isDisabled ||
        this.componentRef) { return; }
    
    if (options) {
      this.delay = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(options.delay) ? this.delay : options.delay;
      this.autoHide = __WEBPACK_IMPORTED_MODULE_1__cores__["ngxUtils"].isNull(options.autoHide) ? this.autoHide : options.autoHide;
    }

    var _styleProperties = this.getStyleProperties();
    this.addValueToProperty(_styleProperties.STATE, 'active');
    
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));

    this.componentRef = this.loadComponentRef();
  };

  this.hide = function (options) {
    if (!this.isActive ||
        (!options && this.autoHide === false) ||
        (options && !options.autoHide) ||
        !this.componentRef) { return; }

    var _self = this,
        _styleProperties = this.getStyleProperties();
    this.removeValueFromProperty(_styleProperties.STATE, 'active');
   
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));

    this.componentRef.then(function (componentRef) {
      componentRef.instance.hide();

      setTimeout(function () {
        componentRef.destroy();

        _self.componentRef = null;
      }, 1 * 1000);
    });
  };

  this.loadComponentRef = function () {
    var _options = new __WEBPACK_IMPORTED_MODULE_2__models_tooltip_option_model_js__["a" /* ngxTooltipOption */]({
      hostElement: this.viewContainerRef.element,
      templateRef: this.ngxTooltipService.getTemplateRef(this.template),
      content: this.content,
      state: this.state,
      position: this.position || 'top',
      delay: this.delay,
      autoHide: this.autoHide
    });

    var _binding = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve([
      new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Provider"](__WEBPACK_IMPORTED_MODULE_4__services_tooltip_service__["ngxTooltipService"], { useValue: this.ngxTooltipService }),
      new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Provider"](__WEBPACK_IMPORTED_MODULE_2__models_tooltip_option_model_js__["a" /* ngxTooltipOption */], { useValue: _options })
    ]);

    return this.componentLoader.loadNextToLocation(__WEBPACK_IMPORTED_MODULE_3__tooltip_component_js__["ngxTooltipComponent"], this.viewContainerRef, _binding)
                               .then(function (componentRef) { return componentRef; });
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(__WEBPACK_IMPORTED_MODULE_1__cores__["ngxBaseDirective"]); }
    return _base;
  }
}

var ngxTooltipDirective = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"]({
  selector: '[ngx-tooltip]',
  properties: [
    'id',
    'content: ngx-tooltip',
    'state: ngx-tooltip-state',
    'position: ngx-tooltip-position',
    'template: ngx-tooltip-template',
    'delay: ngx-tooltip-delay',
    'autoHide: ngx-tooltip-auto-hide',
    'initCssClass:class'
  ],
  host: {
    '(focusin)': 'show()',
    '(mouseenter)': 'show()',
    '(focusout)': 'hide()',
    '(mouseleave)': 'hide()'
  }
})
.Class(new _ngxTooltipDirective());

/***/ }

},[192]);