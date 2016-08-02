import * as ngCore from '@angular/core';
import ngxUtils from  '../cores';
import ngxPopoverOption from './models/popover-option.model';
import ngxPopoverService from './services/popover.service';
import ngxTooltipComponent from'../tooltip';

function _ngxPopoverComponent() {
  var _base;

  this.extends = ngxTooltipComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
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
    else if (ngxUtils.isNull(this.templateRef) && ngxUtils.isNull(this.titleElement)) { throw 'Not found title element of popover'; }
    else if (ngxUtils.isNull(this.templateRef) && ngxUtils.isNull(this.contentElement)) { throw 'Not found content element of popover'; }

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

export var ngxPopoverComponent = ngCore.Component({
  selector: 'ngx-popover',
  templateUrl: './templates/popover.html',
  styleUrls: ['./scss/popover.scss'],
  queries: {
    templateElement: new ngCore.ViewChild('template', { read: ngCore.ViewContainerRef }),
    titleElement: new ngCore.ViewChild('title', { read: ngCore.ViewContainerRef }),
    contentElement: new ngCore.ViewChild('content', { read: ngCore.ViewContainerRef })
  }
})
.Class(new _ngxPopoverComponent());