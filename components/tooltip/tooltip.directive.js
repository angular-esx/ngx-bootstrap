import * as ngCore from '@angular/core';
import { ngxBaseDirective, ngxUtils } from  '../../cores';
import { ngxTooltipOption } from './models/tooltip-option.model.js';
import { ngxTooltipComponent } from './tooltip.component.js';
import { ngxTooltipService } from './services/tooltip.service';

function _ngxTooltipDirective() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngCore.ViewContainerRef,
    ngCore.DynamicComponentLoader,
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

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isActive)){ this.isActive = false; }

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isDisabled)){ this.isDisabled = false; }

    return null;
  };

  this.subscribe = function () {
    var _self = this;
    this.subscription = this.ngxTooltipService.ngxTooltip$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxTooltipService.getActions();
      
      ngxUtils.forEach(_events, function (_event) {
        if (ngxUtils.isEmpty(_event.id) || _event.id === _self.id) {
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
      this.delay = ngxUtils.isNull(options.delay) ? this.delay : options.delay;
      this.autoHide = ngxUtils.isNull(options.autoHide) ? this.autoHide : options.autoHide;
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

    var _binding = ngCore.ReflectiveInjector.resolve([
      new ngCore.Provider(ngxTooltipService, { useValue: this.ngxTooltipService }),
      new ngCore.Provider(ngxTooltipOptionClass, { useValue: _options })
    ]);

    return this.componentLoader.loadNextToLocation(ngxTooltipComponent, this.viewContainerRef, _binding)
                               .then(function (componentRef) { return componentRef; });
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

export var ngxTooltipDirective = ngCore.Directive({
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