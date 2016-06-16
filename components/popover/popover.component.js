var popoverOptionClass = require('./classes/popover-option.class.js');
var ngxPopoverService = require('./services/popover.service.js');
var ngxTooltipComponent = require('./../../components/tooltip/tooltip.component.js');
var ngxWindowService = require('./../../cores/services/window.service.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxPopoverComponent() {
  var _base;

  this.extends = ngxTooltipComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxPopoverService,
    popoverOptionClass,

    function ngxPopoverComponent(elementRef, ngxRenderService, ngxPopoverService, popoverOption) {
      ngxTooltipComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxPopoverService = ngxPopoverService;
      }
    }
  ];

  this.render = function () {
    if (this.templateRef && !this.templateElement) { throw 'Not found template element of popover'; }
    else if (!this.templateRef && !this.titleElement) { throw 'Not found title element of popover'; }
    else if (!this.templateRef && !this.contentElement) { throw 'Not found content element of popover'; }

    if (this.templateRef) {
      this.templateElement.createEmbeddedView(this.templateRef, 0);
    }
    else {
      this.ngxRenderService.for(this.titleElement.element.nativeElement)
                           .setInnerHTML(this.title || '')
                           .for(this.contentElement.element.nativeElement)
                           .setInnerHTML(this.content || '')
                           .for(this.elementRef.nativeElement);
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxTooltipComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-popover',
  /*Inject template at here*/
  /*Inject style at here*/
  providers: [ngxRenderService],
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