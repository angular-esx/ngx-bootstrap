var ngxLinkService = require('./services/link.service.js');
var ngxRenderService = require('./../../services/render/render.service.js');
var ngxBaseComponent = require('./../base/base.component.js');
var ngxBootstrap = require('./../../ngx-bootstrap.js');
ngxBootstrap = require('./../../ngx-bootstrap.utils.js');

function _ngxLinkComponent() {
  var _ATTRIBUTES = {
    HREF: 'href',
    COLOR: 'color',
    SIZE: 'size',
    STATE: 'state'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLinkService,

    function (elementRef, ngxRenderService, ngxLinkService) {
      ngxBaseComponent.call(this, elementRef, ngxRenderService);
      
      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      this.ngxLinkService = ngxLinkService;
      this.cssClass = this.ngxLinkService.prefixClass;
      
      if(!this.href){ this.href = '#'; }
      
      this.clickEmitter = new ng.core.EventEmitter();
    }
  ];
  
  this.ngAfterViewInit = function () {
    this.removeOneTimeBindingAttributes(_ATTRIBUTES.HREF);
  };
  
  this.onBuildCssClass = function (changeRecord) {
    var _prefixClass = this.ngxLinkService.prefixClass;
    
    var _prevColor, _currentColor;
    if(this.ngxLinkService.getColorClass){
      _prevColor = this.ngxLinkService.getColorClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.COLOR));
      _currentColor = this.ngxLinkService.getColorClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.COLOR));
    }
    
    var _prevSize, _currentSize;
    if(this.ngxLinkService.getSizeClass){
      _prevSize = this.ngxLinkService.getSizeClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.SIZE));
      _currentSize = this.ngxLinkService.getSizeClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.SIZE));
    }
    
    var _prevState, _currentState;
    if(this.ngxLinkService.getStateClass){
      _prevState = this.ngxLinkService.getStateClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.STATE));
      _currentState = this.ngxLinkService.getStateClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.STATE));
    }

    var _classes = [_prefixClass];
    
    if (_currentColor) { _classes.push(_currentColor); }
    if (_currentSize) { _classes.push(_currentSize); }
    if (_currentState) { _classes.push(_currentState); }
      
    ngxBootstrap.forEach(this.cssClass.split(' '), function (className) {
      if (
          className && className != _prefixClass &&
          (!_prevColor || _prevColor.indexOf(className) === -1) &&
          (!_prevSize || _prevSize.indexOf(className) === -1) &&
          (!_prevState || _prevState.indexOf(className) === -1)
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
  properties: ['href', 'color', 'size', 'state'],
  events: ['clickEmitter: click']
})
.Class(new _ngxLinkComponent());