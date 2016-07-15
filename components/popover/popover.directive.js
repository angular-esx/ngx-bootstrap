var ngxPopoverOptionClass = require('./classes/popover-option.class.js');
var ngxPopoverComponent = require('./popover.component.js');
var ngxPopoverService = require('./services/popover.service.js');
var ngxTooltipDirective = require('components/tooltip/tooltip.directive.js');
var ngxBootstrap = require('ngxBootstrap');

function _ngxPopoverDirective() {
  var _base;

  this.extends = ngxTooltipDirective;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ng.core.ViewContainerRef,
    ng.core.DynamicComponentLoader,
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
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxPopoverService.getActions();

      ngxBootstrap.forEach(_events, function (_event) {
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
    
    var _binding = ng.core.ReflectiveInjector.resolve([
      new ng.core.Provider(ngxPopoverService, { useValue: this.ngxPopoverService }),
      new ng.core.Provider(ngxPopoverOptionClass, { useValue: _options })
    ]);

    return this.componentLoader.loadNextToLocation(ngxPopoverComponent, this.viewContainerRef, _binding)
                               .then(function (componentRef) { return componentRef; });
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxTooltipDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
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