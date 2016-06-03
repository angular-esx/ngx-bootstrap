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
  template: '﻿<div class=\"ngx-popover-arrow\"></div>\r\n\r\n<div #template *ngIf=\"templateRef\" style=\"display: inline-block;\"></div>\r\n\r\n<div *ngIf=\"!templateRef\" style=\"display: inline-block;\">\r\n  <div #title class=\"ngx-popover-title\"></div>\r\n  <div #content class=\"ngx-popover-content\"></div>\r\n</div>',
  styles: [':host(.ngx-popover) { position: absolute; opacity: 0; z-index: 1060; max-width: 276px; padding: 1px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: .875rem; font-style: normal; font-weight: normal; line-height: 1.5; text-align: left; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; word-spacing: normal; word-wrap: normal; white-space: normal; background-color: #fff; -webkit-background-clip: padding-box; background-clip: padding-box; border: 1px solid rgba(0, 0, 0, 0.2); border-radius: .3rem; line-break: auto; } :host(.ngx-popover-animation-fade) { opacity: 0 !important; } :host(.ngx-popover-animation-fade-in) { opacity: .9; transition: opacity .15s linear; } :host(.ngx-popover.ngx-popover-position-top) { margin-top: -18px; margin-left: -7px; } :host(.ngx-popover.ngx-popover-position-top) .ngx-popover-arrow { bottom: -11px; left: 50%; margin-left: -11px; border-top-color: rgba(0, 0, 0, 0.25); border-bottom-width: 0; } :host(.ngx-popover.ngx-popover-position-top) .ngx-popover-arrow::after { bottom: 1px; margin-left: -10px; content: ""; border-top-color: #fff; border-bottom-width: 0; } :host(.ngx-popover.ngx-popover-position-right) { margin-left: 10px; margin-top: -18px; } :host(.ngx-popover.ngx-popover-position-right) .ngx-popover-arrow { top: 50%; left: -11px; margin-top: -11px; border-right-color: rgba(0, 0, 0, 0.25); border-left-width: 0; } :host(.ngx-popover.ngx-popover-position-right) .ngx-popover-arrow::after { bottom: -10px; left: 1px; content: ""; border-right-color: #fff; border-left-width: 0; } :host(.ngx-popover.ngx-popover-position-bottom) { margin-top: 10px; margin-left: -7px; } :host(.ngx-popover.ngx-popover-position-bottom) .ngx-popover-arrow { top: -11px; left: 50%; margin-left: -11px; border-top-width: 0; border-bottom-color: rgba(0, 0, 0, 0.25); } :host(.ngx-popover.ngx-popover-position-bottom) .ngx-popover-arrow::after { top: 1px; margin-left: -10px; content: ""; border-top-width: 0; border-bottom-color: #fff; } :host(.ngx-popover.ngx-popover-position-left) { margin-left: -24px; margin-top: -18px; } :host(.ngx-popover.ngx-popover-position-left) .ngx-popover-arrow { top: 50%; right: -11px; margin-top: -11px; border-right-width: 0; border-left-color: rgba(0, 0, 0, 0.25); } :host(.ngx-popover.ngx-popover-position-left) .ngx-popover-arrow::after { right: 1px; bottom: -10px; content: ""; border-right-width: 0; border-left-color: #fff; } :host(.ngx-popover) .ngx-popover-title { padding: 8px 14px; margin: 0; background-color: #f7f7f7; border-bottom: 1px solid #ebebeb; border-radius: -.7rem -.7rem 0 0; } :host(.ngx-popover) .ngx-popover-content { padding: 9px 14px; } :host(.ngx-popover) .ngx-popover-arrow, :host(.ngx-popover) .ngx-popover-arrow::after { position: absolute; display: block; width: 0; height: 0; border-color: transparent; border-style: solid; } :host(.ngx-popover) .ngx-popover-arrow { border-width: 11px; } :host(.ngx-popover) .ngx-popover-arrow::after { content: ""; border-width: 10px; } '],
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