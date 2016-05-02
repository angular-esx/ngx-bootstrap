var ngxBaseComponent = require('./../base/base.component.js');
var ngxItemService = require('./services/item.service.js');

function _ngxItemComponent() {
  var _ATTRIBUTES = {
    COLOR: 'color',
    SIZE: 'size',
    STATE: 'state'
  };
  
  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxItemService,

    function (elementRef, ngxItemService) {
      ngxBaseComponent.call(this, elementRef);
      
      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      this.ngxItemService = ngxItemService;
      this.cssClass = this.ngxItemService.prefixClass;
    }
  ];

  this.onBuildCssClass = function (changeRecord) {
    var _prefixClass = this.ngxItemService.prefixClass,
        _prevColor = this.ngxItemService.getColorClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.COLOR)),
        _currentColor = this.ngxItemService.getColorClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.COLOR)),
        _prevSize = this.ngxItemService.getSizeClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.SIZE)),
        _currentSize = this.ngxItemService.getSizeClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.SIZE)),
        _prevState = this.ngxItemService.getStateClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.STATE)),
        _currentState = this.ngxItemService.getStateClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.STATE));

    var _classes = [_prefixClass];
    
    if (_currentColor) { _classes.push(_currentColor); }
    if (_currentSize) { _classes.push(_currentSize); }
    if (_currentState) { _classes.push(_currentState); }
      
    ngxBootstrapUtils.forEach(this.cssClass.split(' '), function (className) {
      if (
          className && className != _prefixClass &&
          className != _prevColor &&
          className != _prevSize &&
          className != _prevState
        )
      {
        _classes.push(className);
      }
    });

    return _classes.join(' ');
  };
  
}

module.exports = ng.core.Component({
  selector: 'ngx-item',
  template: '<div [class]="cssClass"><ng-content></ng-content></div>',
  providers: [ngxRenderService],
  properties: ['color', 'size', 'state']
})
.Class(new _ngxItemComponent());