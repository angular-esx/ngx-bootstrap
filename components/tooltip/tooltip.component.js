var tooltipOptionClass = require('./classes/tooltip-option.class.js');
var ngxTooltipService = require('./services/tooltip.service.js');
var ngxBaseComponent = require('baseComponent');

function _ngxTooltipComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxTooltipService,
    tooltipOptionClass,

    function ngxTooltipComponent(elementRef, renderer, ngxTooltipService, tooltipOption) {
      ngxBaseComponent.apply(this, [elementRef, renderer, ngxTooltipService]);
      
      if (elementRef) {
        this.ngxTooltipService = ngxTooltipService;

        tooltipOption.assign(this);
      }
    }
  ];

  this.ngAfterViewInit = function () {
    this.render();

    var _offset = this.getOffset();
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', (_offset.top !== 0 && !_offset.top ? -1000 : _offset.top) + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', (_offset.left !== 0 && !_offset.left ? -1000 : _offset.left) + 'px');

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
    if (!this.contentElement) { throw 'Not found content element of tooltip'; }

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

  this.getOffset = function () {
    var _positions = this.position.split(' ');
    if (_positions.length === 1) { _positions[1] = 'center'; }
   
    var _hostElementOffset = _getOffset(this.hostElement.nativeElement),
        _elementOffset = _getOffset(this.elementRef.nativeElement);
    
    switch (_positions[0]) {
      case 'right':
        return {
          top: _shiftHeight(this, _hostElementOffset, _elementOffset, _positions[1]),
          left: _shiftWidth(this, _hostElementOffset, _elementOffset, _positions[0])
        };
      case 'left':
        return {
          top: _shiftHeight(this, _hostElementOffset, _elementOffset, _positions[1]),
          left: _hostElementOffset.left - _elementOffset.width
        };
      case 'bottom':
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

  function _getOffset(nativeElement){
    var _boundingClientRect = nativeElement.getBoundingClientRect();

    return {
      width: _boundingClientRect.width || nativeElement.offsetWidth,
      height: _boundingClientRect.height || nativeElement.offsetHeight,
      top: _boundingClientRect.top + (window.pageYOffset || document.documentElement.scrollTop),
      left: _boundingClientRect.left + (window.pageXOffset || document.documentElement.scrollLeft)
    };
  }

  function _shiftWidth(context, hostElementgetOffset, elementOffset, position) {
    switch (position) {
      case 'left':
        return hostElementgetOffset.left;
      case 'right':
        return hostElementgetOffset.left + hostElementgetOffset.width;
      case 'center':
        return hostElementgetOffset.left + hostElementgetOffset.width / 2 - elementOffset.width / 2;
    }
  }

  function _shiftHeight(context, hostElementgetOffset, elementOffset, position) {
    switch (position) {
      case 'top':
        return hostElementgetOffset.top;
      case 'bottom':
        return hostElementgetOffset.top + hostElementgetOffset.height;
      case 'center':
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
  queries: {
    contentElement: new ng.core.ViewChild('content', { read: ng.core.ViewContainerRef })
  },
  host: {
    '[style.display]': '"inline-flex"'
  }
})
.Class(new _ngxTooltipComponent());