var tooltipOptionClass = require('./classes/tooltip-option.class.js');
var ngxTooltipService = require('./services/tooltip.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxWindowService = require('./../../cores/services/window.service.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxTooltipComponent() {
  var _base;
  var _ATTRIBUTES = {
    ANIMATION: 'animation',
    STATE: 'state',
    POSITION: 'position'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxTooltipService,
    tooltipOptionClass,

    function ngxTooltipComponent(elementRef, ngxRenderService, ngxTooltipService, tooltipOption) {
      ngxBaseComponent.apply(this, [elementRef, ngxRenderService, ngxTooltipService]);
      
      if (elementRef) {
        this.ngxTooltipService = ngxTooltipService;

        tooltipOption.assign(this);
      }
    }
  ];

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = _getBaseInstance(this).onAggregatePropertyValueState.apply(this, arguments);

    if (this.ngxTooltipService.getPositionClass) {
      _aggregate[_ATTRIBUTES.POSITION] = {
        prev: this.ngxTooltipService.getPositionClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.POSITION)),
        current: this.ngxTooltipService.getPositionClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.POSITION))
      };
    }

    return _aggregate;
  };

  this.ngAfterViewInit = function () {
    this.render();

    var _offset = this.getOffset();
    this.ngxRenderService.addStyle('top', (_offset.top !== 0 && !_offset.top ? -1000 : _offset.top) + 'px');
    this.ngxRenderService.addStyle('left', (_offset.left !== 0 && !_offset.left ? -1000 : _offset.left) + 'px');

    var _changeRecord = {
      state: { currentValue: this.state },
      position: { currentValue: this.position }
    };

    this.ngOnChanges(_changeRecord);

    this.show();
  };

  this.render = function () {
    if (!this.contentElement) { throw 'Not found content element of tooltip'; }

    if (this.templateRef) {
      this.contentElement.createEmbeddedView(this.templateRef, 0);
    }
    else {
      this.ngxRenderService.for(this.contentElement.element.nativeElement)
                           .setInnerHTML(this.content)
                           .for(this.elementRef.nativeElement);
    }
  };

  this.show = function () {
    if (this.ngxTooltipService.isFadeAnimationClass(this.getPrefixClass(), this.animation)) {
      var _self = this;
      setTimeout(function () {
        _self.ngxRenderService.addClass(_self.ngxTooltipService.getFadeInAnimationClass(_self.getPrefixClass()));
      }, _self.delay);
    }
  };

  this.hide = function () {
    this.ngxRenderService.addClass(this.ngxTooltipService.getFadeAnimationClass(this.getPrefixClass()));
  };

  this.getOffset = function () {
    var _positions = this.position.split(' ');
    if (_positions.length === 1) { _positions[1] = this.ngxTooltipService.getPositions().CENTER; }
   
    var _hostElementgetOffset = this.ngxRenderService.for(this.hostElement.nativeElement).getOffset(),
        _elementOffset = this.ngxRenderService.for(this.elementRef.nativeElement).getOffset();
    
    switch (_positions[0]) {
      case this.ngxTooltipService.getPositions().RIGHT:
        return {
          top: _shiftHeight(this, _hostElementgetOffset, _elementOffset, _positions[1]),
          left: _shiftWidth(this, _hostElementgetOffset, _elementOffset, _positions[0])
        };
      case this.ngxTooltipService.getPositions().LEFT:
        return {
          top: _shiftHeight(this, _hostElementgetOffset, _elementOffset, _positions[1]),
          left: _hostElementgetOffset.left - _elementOffset.width
        };
      case this.ngxTooltipService.getPositions().BOTTOM:
        return {
          top: _shiftHeight(this, _hostElementgetOffset, _elementOffset, _positions[0]),
          left: _shiftWidth(this, _hostElementgetOffset, _elementOffset, _positions[1])
        };
      default:
        return {
          top: (_hostElementgetOffset.top - _hostElementgetOffset.height) - _elementOffset.height,
          left: _shiftWidth(this, _hostElementgetOffset, _elementOffset, _positions[1])
        };
    }
  };

  function _shiftWidth(context, hostElementgetOffset, elementOffset, position) {
    var _positions = context.ngxTooltipService.getPositions();
    
    switch (position) {
      case _positions.LEFT:
        return hostElementgetOffset.left;
      case _positions.RIGHT:
        return hostElementgetOffset.left + hostElementgetOffset.width;
      case _positions.CENTER:
        return hostElementgetOffset.left + hostElementgetOffset.width / 2 - elementOffset.width / 2;
    }
  }

  function _shiftHeight(context, hostElementgetOffset, elementOffset, position) {
    var _positions = context.ngxTooltipService.getPositions();

    switch (position) {
      case _positions.TOP:
        return hostElementgetOffset.top;
      case _positions.BOTTOM:
        return hostElementgetOffset.top + hostElementgetOffset.height;
      case _positions.CENTER:
        return hostElementgetOffset.top + hostElementgetOffset.height / 2 - elementOffset.height / 2;
    }
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-tooltip',
  template: '﻿<div class=\"ngx-tooltip-arrow\"></div>\r\n<div class=\"ngx-tooltip-content\" style=\"display: inline-block;\">\r\n  <div #content></div>\r\n</div>',
  styles: [':host(.ngx-tooltip) { position: absolute; opacity: 0; z-index: 1070; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: .875rem; font-style: normal; font-weight: normal; line-height: 1.5; text-align: left; text-align: start; text-decoration: none; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; word-spacing: normal; word-wrap: normal; white-space: normal; line-break: auto; } :host(.ngx-tooltip-animation-fade) { opacity: 0 !important; } :host(.ngx-tooltip-animation-fade-in) { opacity: .9; transition: opacity .15s linear; } :host(.ngx-tooltip.ngx-tooltip-position-top) { padding: 5px 0; margin-top: 10px; } :host(.ngx-tooltip.ngx-tooltip-position-top) .ngx-tooltip-arrow { bottom: 0; left: 50%; margin-left: -5px; border-width: 5px 5px 0; border-top-color: #000; } :host(.ngx-tooltip.ngx-tooltip-position-right) { padding: 0 5px; } :host(.ngx-tooltip.ngx-tooltip-position-right) .ngx-tooltip-arrow { top: 50%; left: 0; margin-top: -5px; border-width: 5px 5px 5px 0; border-right-color: #000; } :host(.ngx-tooltip.ngx-tooltip-position-bottom) { padding: 5px 0; margin-top: 3px; } :host(.ngx-tooltip.ngx-tooltip-position-bottom) .ngx-tooltip-arrow { top: 0; left: 50%; margin-left: -5px; border-width: 0 5px 5px; border-bottom-color: #000; } :host(.ngx-tooltip.ngx-tooltip-position-left) { padding: 0 5px; margin-left: -8px; } :host(.ngx-tooltip.ngx-tooltip-position-left) .ngx-tooltip-arrow { top: 50%; right: 0; margin-top: -5px; border-width: 5px 0 5px 5px; border-left-color: #000; } :host(.ngx-tooltip) .ngx-tooltip-content { max-width: 200px; padding: 3px 8px; color: #fff; text-align: center; background-color: #000; border-radius: .25rem; } :host(.ngx-tooltip) .ngx-tooltip-arrow { position: absolute; width: 0; height: 0; border-color: transparent; border-style: solid; } '],
  providers: [ngxRenderService],
  queries: {
    contentElement: new ng.core.ViewChild('content', { read: ng.core.ViewContainerRef })
  },
  host: {
    '[style.display]': '"inline-flex"'
  }
})
.Class(new _ngxTooltipComponent());