var tooltipOptionClass = require('./classes/tooltip-option.class.js');
var tooltipComponent = require('./' + __COMPONENT_FILE__);
var ngxTooltipService = require('./services/tooltip.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxTooltipDirective() {
  var _subscription;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.ViewContainerRef,
    ng.core.DynamicComponentLoader,
    ngxTooltipService,

    function ngxTooltipDirective(elementRef, viewContainerRef, componentLoader, ngxTooltipService) {
      if (elementRef) {
        this.elementRef = elementRef;
        this.ngxTooltipService = ngxTooltipService;
        this.viewContainerRef = viewContainerRef;
        this.componentLoader = componentLoader;
      }
    }
  ];

  this.ngOnInit = function () {
    if (!this.elementRef) { return; }

    if (this.autoHide === 'true') { this.autoHide = true; }
    else if (this.autoHide === 'false') { this.autoHide = false; }

    var _self = this;
    _subscription = this.ngxTooltipService.ngxTooltip$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxTooltipService.getActions();

      ngxBootstrap.forEach(_events, function (_event) {
        if (!_event.id || _self.id === _event.id) {
          if (_event.type === _actions.ENABLE_TOOLTIP) {
            _self.enable(_event.isEnable);
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

  this.ngOnDestroy = function () {
    if (_subscription) { _subscription.unsubscribe(); }
  };

  this.getPrefixClass = function () {
    return 'ngx-tooltip';
  };

  this.enable = function (isEnable) {
    if (isEnable && this.state && this.ngxTooltipService.isDisabledStateClass(this.getPrefixClass(), this.state)) {
      this.state = this.state.replace(this.ngxTooltipService.getStates().DISABLED, '').trim();
    }
    else if (!isEnable && !this.ngxTooltipService.isDisabledStateClass(this.getPrefixClass(), this.state)) {
      var _states = [];
      if (this.state) { _states = this.state.split(' '); }

      _states.push(this.ngxTooltipService.getStates().DISABLED);

      this.state = _states.join(' ');
    }
  };

  this.show = function (options) {
    if (this.ngxTooltipService.isActiveStateClass(this.getPrefixClass(), this.state) ||
        this.ngxTooltipService.isDisabledStateClass(this.getPrefixClass(), this.state) ||
        this.tooltipComponentRef) { return; }
    
    if (options) {
      this.delay = (options.delay !== undefined && options.delay !== null) ? options.delay : this.delay;
      this.autoHide = (options.autoHide !== undefined && options.autoHide !== null) ? options.autoHide : this.autoHide;
    }

    this.state = this.ngxTooltipService.getStates().ACTIVE;
    
    var _options = new tooltipOptionClass({
      hostElement: this.viewContainerRef.element,
      templateRef: this.ngxTooltipService.getTemplateRef(this.template),
      content: this.content,
      state: this.state,
      position: this.position || this.ngxTooltipService.getPositions().TOP,
      animation: this.ngxTooltipService.getAnimations().FADE,
      delay: this.delay,
      autoHide: this.autoHide
    });
    
    var _binding = ng.core.ReflectiveInjector.resolve([
      new ng.core.Provider(ngxTooltipService, { useValue: this.ngxTooltipService }),
      new ng.core.Provider(tooltipOptionClass, { useValue: _options })
    ]);

    this.tooltipComponentRef = this.componentLoader
                                   .loadNextToLocation(tooltipComponent, this.viewContainerRef, _binding)
                                   .then(function (componentRef) { return componentRef; });
  };

  this.hide = function (options) {
    if (!this.ngxTooltipService.isActiveStateClass(this.getPrefixClass(), this.state) ||
        (!options && this.autoHide === false) ||
        (options && !options.autoHide) ||
        !this.tooltipComponentRef) { return; }

    if (this.state) {
      this.state = this.state.replace(this.ngxTooltipService.getStates().ACTIVE, '').trim();
    }
   
    var _self = this;
    this.tooltipComponentRef.then(function (componentRef) {
      componentRef.instance.hide();

      setTimeout(function () {
        componentRef.destroy();

        _self.tooltipComponentRef = null;
      }, 1 * 1000);
    });
  };
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
    'autoHide: ngx-tooltip-auto-hide'
  ],
  host: {
    '(focusin)': 'show()',
    '(mouseenter)': 'show()',
    '(focusout)': 'hide()',
    '(mouseleave)': 'hide()'
  }
})
.Class(new _ngxTooltipDirective());