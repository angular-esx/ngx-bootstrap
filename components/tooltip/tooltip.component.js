import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxUtils } from  '../../cores';
import { ngxTooltipOption } from './models/tooltip-option.model';
import { ngxTooltipService } from './services/tooltip.service';

function _ngxTooltipComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngxTooltipService,
    ngxTooltipOption,

    function ngxTooltipComponent(elementRef, renderer, ngxTooltipService, ngxTooltipOption) {
      ngxBaseComponent.apply(this, [elementRef, renderer, ngxTooltipService]);
      
      if (elementRef) {
        this.ngxTooltipService = ngxTooltipService;

        ngxTooltipOption.assign(this);
      }
    }
  ];

  this.ngAfterViewInit = function () {
    this.render();

    var _rect = this.getRect();
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', (_rect.top !== 0 && !_rect.top ? -1000 : _rect.top) + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', (_rect.left !== 0 && !_rect.left ? -1000 : _rect.left) + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', _rect.width + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', _rect.height + 'px');

    var _styleProperties = this.getStyleProperties();
    var _changeRecord = this.buildChangeRecord(_styleProperties.STATE, this.state);
    this.buildChangeRecord(_styleProperties.POSITION, this.position, null, _changeRecord);

    this.ngOnChanges(_changeRecord);

    _getBaseInstance(this).ngAfterViewInit.apply(this);

    this.show();
  };

  this.getPrefixClass = function () {
    return 'ngx-tooltip';
  };

  this.render = function () {
    if (ngxUtils.isNull(this.contentElement)) { throw 'Not found content element of tooltip'; }

    if (this.templateRef) {
      this.contentElement.createEmbeddedView(this.templateRef, 0);
    }
    else {
      this.contentElement.element.nativeElement.innerHTML = this.content;
    }
  };

  this.show = function () {
    var _self = this;
    setTimeout(function () {
      _self.ngxTooltipService.fadeIn(_self.elementRef);
    }, _self.delay);
  };

  this.hide = function () {
    this.ngxTooltipService.fadeOut(this.elementRef);
  };

  this.getRect = function () {
    var _positions = this.position.split(' ');
    if (_positions.length === 1) { _positions[1] = 'center'; }
    
    var _hostElementRect = _getRect(this.hostElement.nativeElement),
        _elementRect = _getRect(this.elementRef.nativeElement);
    
    var _rect;
    switch (_positions[0]) {
      case 'right':
        _rect = {
          top: _shiftHeight(this, _hostElementRect, _elementRect, _positions[1]),
          left: _shiftWidth(this, _hostElementRect, _elementRect, _positions[0])
        };
        break;
      case 'left':
        _rect = {
          top: _shiftHeight(this, _hostElementRect, _elementRect, _positions[1]),
          left: _hostElementRect.left - _elementRect.width
        };
        break;
      case 'bottom':
        _rect = {
          top: _shiftHeight(this, _hostElementRect, _elementRect, _positions[0]),
          left: _shiftWidth(this, _hostElementRect, _elementRect, _positions[1])
        };
        break;
      default:
        _rect = {
          top: _hostElementRect.top - _elementRect.height,
          left: _shiftWidth(this, _hostElementRect, _elementRect, _positions[1])
        };
    }

    _rect.width = _elementRect.width;
    _rect.height = _elementRect.height;

    return _rect;
  };

  function _getRect(nativeElement){
    var _boundingClientRect = nativeElement.getBoundingClientRect();

    return {
      width: _boundingClientRect.width || nativeElement.offsetWidth,
      height: _boundingClientRect.height || nativeElement.offsetHeight,
      top: _boundingClientRect.top + (window.pageYOffset || document.documentElement.scrollTop),
      left: _boundingClientRect.left + (window.pageXOffset || document.documentElement.scrollLeft)
    };
  }

  function _shiftWidth(context, hostElementRect, elementRect, position) {
    switch (position) {
      case 'left':
        return hostElementRect.left;
      case 'right':
        return hostElementRect.left + hostElementRect.width;
      case 'center':
        return  hostElementRect.left + hostElementRect.width / 2 - elementRect.width / 2;
    }
  }

  function _shiftHeight(context, hostElementRect, elementRect, position) {
    switch (position) {
      case 'top':
        return hostElementRect.top;
      case 'bottom':
        return hostElementRect.top + hostElementRect.height;
      case 'center':
        return hostElementRect.top + hostElementRect.height / 2 - elementRect.height / 2;
    }
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxTooltipComponent = ngCore.Component({
  selector: 'ngx-tooltip',
  templateUrl: './templates/tooltip.html',
  styleUrls: ['./scss/tooltip.scss'],
  queries: {
    contentElement: new ngCore.ViewChild('content', { read: ngCore.ViewContainerRef })
  }
})
.Class(new _ngxTooltipComponent());