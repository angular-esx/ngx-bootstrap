var tooltipOptionClass = require('./classes/tooltip-option.class.js');
var tooltipComponent = require('./' + __COMPONENT_FILE__);
var ngxTooltipService = require('./services/tooltip.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxTooltipDirective() {
  var _tooltipPromise;

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

  this.getPrefixClass = function () {
    return 'ngx-tooltip';
  };

  this.show = function () {
    if (this.ngxTooltipService.isActiveStateClass(this.getPrefixClass(), this.state) || 
        this.ngxTooltipService.isDisabledStateClass(this.getPrefixClass(), this.state)){ return; }

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

    _tooltipPromise = this.componentLoader
                          .loadNextToLocation(tooltipComponent, this.viewContainerRef, _binding)
                          .then(function (componentRef) { return componentRef; });
  };

  this.hide = function () {
    if (!this.ngxTooltipService.isActiveStateClass(this.getPrefixClass(), this.state) || !_tooltipPromise) { return; }

    this.state = '';
   
    _tooltipPromise.then(function (componentRef) {
      componentRef.instance.hide();

      setTimeout(function () {
        componentRef.destroy();
      }, 1 * 1000);
    });
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-tooltip]',
  properties: [
    'id',
    'state: ngx-tooltip-state',
    'position: ngx-tooltip-position',
    'content: ngx-tooltip',
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