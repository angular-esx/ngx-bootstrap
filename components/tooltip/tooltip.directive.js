var ngxTooltipOptionClass = require('./classes/tooltip-option.class.js');
var ngxTooltipComponent = require('./tooltip.component.js');
var ngxTooltipService = require('./services/tooltip.service.js');
var ngxBaseDirective = require('baseDirective');
var ngxBootstrap = require('ngxBootstrap');

function _ngxTooltipDirective() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ng.core.ViewContainerRef,
    ng.core.DynamicComponentLoader,
    ngxTooltipService,

    function ngxTooltipDirective(elementRef, renderer, viewContainerRef, componentLoader, ngxTooltipService) {
      ngxBaseDirective.apply(this, [elementRef, renderer]);
      
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

    if(!this.state && !this.isActive){ this.isActive = false; }

    if(!this.state && !this.isDisabled){ this.isDisabled = false; }

    return null;
  };

  this.subscribe = function () {
    var _self = this;
    this.subscription = this.ngxTooltipService.ngxTooltip$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxTooltipService.getActions();
      
      ngxBootstrap.forEach(_events, function (_event) {
        if (!_event.id || _event.id === _self.id) {
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
      this.delay = (options.delay !== undefined && options.delay !== null) ? options.delay : this.delay;
      this.autoHide = (options.autoHide !== undefined && options.autoHide !== null) ? options.autoHide : this.autoHide;
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
    var _options = new ngxTooltipOptionClass({
      hostElement: this.viewContainerRef.element,
      templateRef: this.ngxTooltipService.getTemplateRef(this.template),
      content: this.content,
      state: this.state,
      position: this.position || 'top',
      delay: this.delay,
      autoHide: this.autoHide
    });

    var _binding = ng.core.ReflectiveInjector.resolve([
      new ng.core.Provider(ngxTooltipService, { useValue: this.ngxTooltipService }),
      new ng.core.Provider(ngxTooltipOptionClass, { useValue: _options })
    ]);

    return this.componentLoader.loadNextToLocation(ngxTooltipComponent, this.viewContainerRef, _binding)
                               .then(function (componentRef) { return componentRef; });
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
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