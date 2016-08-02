import * as ngCore from '@angular/core';
import ngxUtils from  '../cores';
import ngxPopoverOption from './models/popover-option.model';
import ngxPopoverComponent from './popover.component';
import ngxPopoverService from './services/popover.service';
import ngxTooltipDirective from '../tooltip';

function _ngxPopoverDirective() {
  var _base;

  this.extends = ngxTooltipDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngCore.ViewContainerRef,
    ngCore.DynamicComponentLoader,
    ngxPopoverService,

    function ngxPopoverDirective(elementRef, renderer, viewContainerRef, componentLoader, ngxPopoverService) {
      ngxTooltipDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxPopoverService = ngxPopoverService;
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-popover';
  };

  this.subscribe = function () {
    var _self = this;
    this.subscription = this.ngxPopoverService.ngxPopover$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxPopoverService.getActions();

      ngxUtils.forEach(_events, function (_event) {
        if (!_event.id || _event.id === _self.id) {
          if (_event.type === _actions.ENABLE_POPOVER) {
            _self.enable(_event.isEnabled);
          }
          else if (_event.type === _actions.TOGGLE_POPOVER) {
            _self.toggle({
              delay: _event.delay
            });
          }
        }
      });
    });
  };

  this.toggle = function (options) {
    if (this.isActive) {
      if (options) { options.autoHide = true; }
      this.hide(options);
    }
    else {
      if (this.title || this.content || this.template) {
        if (options) { options.autoHide = false; }
        this.show(options);
      }
    }
  };

  this.loadComponentRef = function () {
    var _options = new ngxPopoverOptionClass({
      hostElement: this.viewContainerRef.element,
      templateRef: this.ngxPopoverService.getTemplateRef(this.template),
      title: this.title,
      content: this.content,
      state: this.state,
      position: this.position || 'top',
      delay: this.delay
    });
    
    var _binding = ngCore.ReflectiveInjector.resolve([
      new ngCore.Provider(ngxPopoverService, { useValue: this.ngxPopoverService }),
      new ngCore.Provider(ngxPopoverOptionClass, { useValue: _options })
    ]);

    return this.componentLoader.loadNextToLocation(ngxPopoverComponent, this.viewContainerRef, _binding)
                               .then(function (componentRef) { return componentRef; });
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxTooltipDirective); }
    return _base;
  }
}

export var ngxPopoverDirective = ngCore.Directive({
  selector: '[ngx-popover]',
  properties: [
    'id',
    'title: ngx-popover-title',
    'content: ngx-popover-content',
    'state: ngx-popover-state',
    'position: ngx-popover-position',
    'template: ngx-popover-template',
    'delay: ngx-popover-delay',
    'initCssClass:class'
  ],
  host: {
    '(click)': 'toggle()'
  }
})
.Class(new _ngxPopoverDirective());