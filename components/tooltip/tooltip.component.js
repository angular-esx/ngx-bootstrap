var tooltipOptionClass = require('./classes/tooltip-option.class.js');
var ngxTooltipService = require('./services/tooltip.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxWindowService = require('windowService');
var ngxBootstrap = require('utils');

function _ngxTooltipComponent() {
  var _base;
  var _ATTRIBUTES = {
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
    var _self = this;
    setTimeout(function () {
      _self.ngxTooltipService.fadeIn(_self.elementRef.nativeElement);
    }, _self.delay);
  };

  this.hide = function () {
    this.ngxTooltipService.fadeOut(this.elementRef.nativeElement);
  };

  this.getOffset = function () {
    var _positions = this.position.split(' ');
    if (_positions.length === 1) { _positions[1] = this.ngxTooltipService.getPositions().CENTER; }
   
    var _hostElementOffset = this.ngxRenderService.for(this.hostElement.nativeElement).getOffset(),
        _elementOffset = this.ngxRenderService.for(this.elementRef.nativeElement).getOffset();
    
    switch (_positions[0]) {
      case this.ngxTooltipService.getPositions().RIGHT:
        return {
          top: _shiftHeight(this, _hostElementOffset, _elementOffset, _positions[1]),
          left: _shiftWidth(this, _hostElementOffset, _elementOffset, _positions[0])
        };
      case this.ngxTooltipService.getPositions().LEFT:
        return {
          top: _shiftHeight(this, _hostElementOffset, _elementOffset, _positions[1]),
          left: _hostElementOffset.left - _elementOffset.width
        };
      case this.ngxTooltipService.getPositions().BOTTOM:
        return {
          top: _shiftHeight(this, _hostElementOffset, _elementOffset, _positions[0]),
          left: _shiftWidth(this, _hostElementOffset, _elementOffset, _positions[1])
        };
      default:
        return {
          top: _hostElementOffset.top - _elementOffset.height,
          left: _shiftWidth(this, _hostElementOffset, _elementOffset, _positions[1])
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
  template: require('./themes/' + __THEME__ + '/templates/tooltip.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/tooltip.scss')],
  providers: [ngxRenderService],
  queries: {
    contentElement: new ng.core.ViewChild('content', { read: ng.core.ViewContainerRef })
  },
  host: {
    '[style.display]': '"inline-flex"'
  }
})
.Class(new _ngxTooltipComponent());