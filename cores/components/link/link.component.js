var ngxBaseComponent = require('./../base/base.component.js');
var ngxLinkService = require('./services/link.service.js');

function _ngxLinkComponent() {
  var _ATTRIBUTES = {
    HREF: 'href',
    COLOR: 'color',
    SIZE: 'size',
    STATE: 'state'
  };

  this.constructor = [
    ng.core.ElementRef,
    ngxLinkService,

    function (elementRef, ngxLinkService) {
      ngxBaseComponent.call(this, elementRef);
      
      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      this.ngxLinkService = ngxLinkService;
      this.cssClass = this.ngxLinkService.prefixClass;
      
      this.clickEmitter = new ng.core.EventEmitter();
    }
  ];
  
  this.ngAfterViewInit = function () {
    this.removeOneTimeBindingAttributes(_ATTRIBUTES.HREF);
  };
  
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

  this.click = function ($event) {
    if (this.ngxLinkService.isDisabledStateClass(this.state)) {
      $event.preventDefault();
      return;
    }
    
    if(this.clickEmitter){
      this.clickEmitter.emit({
        href: this.href,
        preventDefault: function () { $event.preventDefault(); }
      });
    }   
  };

}

module.exports = ng.core.Component({
  selector: 'ngx-link',
  template: '<a [class]="cssClass" [href]="href" (click)="click($event)"><ng-content></ng-content></a>',
  providers: [ngxRenderService],
  properties: ['href', 'color', 'size', 'state'],
  events: ['clickEmitter: click']
})
.Class(new _ngxLinkComponent());