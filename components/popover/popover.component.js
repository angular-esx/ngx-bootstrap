var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;
var popoverOptionClass = require('./classes/popover-option.class.js');
var ngxPopoverService = require('./services/popover.service.js');
var ngxTooltip = require('../tooltip/index.js');

function _ngxPopoverComponent() {
  var _base;

  this.extends = ngxTooltip.tooltipComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngxPopoverService,
    popoverOptionClass,

    function ngxPopoverComponent(elementRef, renderer, ngxPopoverService, popoverOption) {
      ngxTooltip.tooltipComponent.apply(this, arguments);

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
    else if (ngxUtil.isNull(this.templateRef) && ngxUtil.isNull(this.titleElement)) { throw 'Not found title element of popover'; }
    else if (ngxUtil.isNull(this.templateRef) && ngxUtil.isNull(this.contentElement)) { throw 'Not found content element of popover'; }

    if (this.templateRef) {
      this.templateElement.createEmbeddedView(this.templateRef, 0);
    }
    else {
      this.titleElement.element.nativeElement.innerHTML = this.title || '';
      this.contentElement.element.nativeElement.innerHTML = this.content || '';
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxTooltip.tooltipComponent); }
    return _base;
  }
}

module.exports = ngCore.Component({
  selector: 'ngx-popover',
  template: require('./themes/' + __THEME__ + '/templates/popover.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/popover.scss')],
  queries: {
    templateElement: new ngCore.ViewChild('template', { read: ngCore.ViewContainerRef }),
    titleElement: new ngCore.ViewChild('title', { read: ngCore.ViewContainerRef }),
    contentElement: new ngCore.ViewChild('content', { read: ngCore.ViewContainerRef })
  }
})
.Class(new _ngxPopoverComponent());