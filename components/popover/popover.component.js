var popoverOptionClass = require('./classes/popover-option.class.js');
var ngxPopoverService = require('./services/popover.service.js');
var ngxTooltipComponent = require('components/tooltip/tooltip.component.js');

function _ngxPopoverComponent() {
  var _base;

  this.extends = ngxTooltipComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxPopoverService,
    popoverOptionClass,

    function ngxPopoverComponent(elementRef, renderer, ngxPopoverService, popoverOption) {
      ngxTooltipComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxPopoverService = ngxPopoverService;
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-popover';
  };

  this.render = function () {
    if (this.templateRef && !this.templateElement) { throw 'Not found template element of popover'; }
    else if (!this.templateRef && !this.titleElement) { throw 'Not found title element of popover'; }
    else if (!this.templateRef && !this.contentElement) { throw 'Not found content element of popover'; }

    if (this.templateRef) {
      this.templateElement.createEmbeddedView(this.templateRef, 0);
    }
    else {
      this.titleElement.element.nativeElement.innerHTML = this.title || '';
      this.contentElement.element.nativeElement.innerHTML = this.content || '';
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxTooltipComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-popover',
  template: require('./themes/' + __THEME__ + '/templates/popover.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/popover.scss')],
  queries: {
    templateElement: new ng.core.ViewChild('template', { read: ng.core.ViewContainerRef }),
    titleElement: new ng.core.ViewChild('title', { read: ng.core.ViewContainerRef }),
    contentElement: new ng.core.ViewChild('content', { read: ng.core.ViewContainerRef })
  },
  host: {
    '[style.display]': '"inline-flex"'
  }
})
.Class(new _ngxPopoverComponent());