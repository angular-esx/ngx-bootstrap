var ngxAlertService = require('./services/alert.service.js');
var ngxAlertLinkService = require('./services/alert-link.service.js');
var ngxLinkService = require('./../../cores/components/link/services/link.service.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxAlertComponent() {
  var _ATTRIBUTES = {
    ID: 'id',
    COLOR: 'color',
    TYPE: 'type',
    POSITION: 'position',
    STATE: 'state'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxAlertService,

    function (elementRef, ngxRenderService, ngxAlertService) {
      ngxBaseComponent.call(this, elementRef, ngxRenderService);
      
      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      this.ngxAlertService = ngxAlertService;
      this.cssClass = this.ngxAlertService.prefixClass;
      this.dismissEmitter = new ng.core.EventEmitter();
      
      var _self = this;
      this.ngxAlertService.subscribe(
        function (event) {
          if (!event || !event.id || _self.id === event.id) {
            var _actions = _self.ngxAlertService.getActions();

            if (event.type === _actions.SHOW_ALERT) {
              _self.show();
            }
            else if (event.type === _actions.DISMISS_ALERT) {
              _self.dismiss();
            }
          }
        },
        function (error) {
          console.error('ngxAlertService', error);
        });
    }
  ];

  this.onBuildCssClass = function (changeRecord) {
    this.isDismissible = this.ngxAlertService.isDismissibleTypeClass(this.type);
    
    var _prefixClass = this.ngxAlertService.prefixClass;
    
    var _prevColor, _currentColor;
    if(this.ngxAlertService.getColorClass){
      _prevColor = this.ngxAlertService.getColorClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.COLOR));
      _currentColor = this.ngxAlertService.getColorClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.COLOR));
    }
    
    var _prevType, _currentType;
    if(this.ngxAlertService.getTypeClass){
      _prevType = this.ngxAlertService.getTypeClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.TYPE));
      _currentType = this.ngxAlertService.getTypeClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.TYPE));
    }
    
    var _prevState, _currentState;
    if(this.ngxAlertService.getStateClass){
      _prevState = this.ngxAlertService.getStateClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.STATE));
      _currentState = this.ngxAlertService.getStateClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.STATE));
    }

    var _prevPosition, _currentPosition;
    if(this.ngxAlertService.getPositionClass){
      _prevPosition = this.ngxAlertService.getPositionClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.POSITION));
      _currentPosition = this.ngxAlertService.getPositionClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.POSITION));
    }

    var _classes = [_prefixClass];
    
    if (_currentColor) { _classes.push(_currentColor); }
    if (_currentType) { _classes.push(_currentType); }
    if (_currentState) { _classes.push(_currentState); }
    if (_currentPosition && this.ngxAlertService.isFloatTypeClass(this.type)) { _classes.push(_currentPosition); }
      
    ngxBootstrap.forEach(this.cssClass.split(' '), function (className) {
      if (
          className && className != _prefixClass &&
          (!_prevColor || _prevColor.indexOf(className) === -1) &&
          (!_prevType || _prevType.indexOf(className) === -1) &&
          (!_prevState || _prevState.indexOf(className) === -1) &&
          (!_prevPosition || _prevPosition.indexOf(className) === -1)
        )
      {
        _classes.push(className);
      }
    });
    
    _classes.push(this.ngxAlertService.getFadeAnimationClass());
    if(!this.ngxAlertService.isHiddenStateClass(this.state)){
      _classes.push(this.ngxAlertService.getFadeInAnimationClass());
    }

    return _classes.join(' ');
  };

  this.show = function () {
    var _self = this;
        _floatTypeClass = this.ngxAlertService.getFloatTypeClass();
        _fadeInAnimationClass = this.ngxAlertService.getFadeInAnimationClass();
        _cssClasses = [];
    
    ngxBootstrap.forEach(this.cssClass.split(' '), function(cssClass){
      if (cssClass ===  _floatTypeClass && 
          _self.ngxAlertService.isFloatTypeClass(_self.type)) {
        _cssClasses.push(cssClass);
      }
      else{
        _cssClasses.push(cssClass);
      }
    });
    
    if(_cssClasses.length > 0 && _cssClasses.indexOf(_fadeInAnimationClass) === -1){
      _cssClasses.push(_fadeInAnimationClass);
    }
    
    this.cssClass = _cssClasses.join(' ');
  };

  this.dismiss = function () {
    var _self = this;
        _floatTypeClass = this.ngxAlertService.getFloatTypeClass();
        _fadeInAnimationClass = this.ngxAlertService.getFadeInAnimationClass();
        _cssClasses = [];
    
    ngxBootstrap.forEach(this.cssClass.split(' '), function(cssClass){
      if (cssClass ===  _floatTypeClass && 
          !_self.ngxAlertService.isFloatTypeClass(_self.type)) {
        _cssClasses.push(cssClass);
      }
      else if(cssClass != _fadeInAnimationClass){
        _cssClasses.push(cssClass);
      }
    });
    
    this.cssClass = _cssClasses.join(' ');

    this.dismissEmitter.next({
      target: { id: this.id }
    });
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-alert',
  /*Inject template at here*/
  /*Inject style at here*/
  templateUrl: 'components/alert/templates/alert.bootstrap4.html',
  providers:[
    ng.core.provide(ngxLinkService, { useClass: ngxAlertLinkService })
  ],
  properties: ['id', 'color', 'type', 'position', 'state'],
  events: ['dismissEmitter: dismiss'],
})
.Class(new _ngxAlertComponent());