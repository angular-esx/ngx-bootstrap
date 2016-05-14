var ngxAlertService = require('./services/alert.service.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxAlertComponent() {
  var _base;
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

    function ngxAlertComponent(elementRef, ngxRenderService, ngxAlertService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxAlertService = ngxAlertService;

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
    }
  ];

  this.onAggregatePropertyValueState = function(changeRecord){
    var _aggregate = _getBaseInstance(this).onAggregatePropertyValueState.apply(this, arguments);
    
    if(this.ngxAlertService.getPositionClass){
      _aggregate[_ATTRIBUTES.POSITION] = {
        prev: this.ngxAlertService.getPositionClass(this.prefixClass, this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.POSITION)),
        current: this.ngxAlertService.getPositionClass(this.prefixClass, this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.POSITION))
      };
    }
    
    return _aggregate;
  };
  
  this.onBuildOwnCssClass = function(aggregate){
    this.isDismissible = this.ngxAlertService.isDismissibleTypeClass(this.prefixClass, this.type);
    
    var _self = this;
        _classes = [this.prefixClass];
    
    ngxBootstrap.forEach(aggregate, function(attributeValues, attributeName){
      if(attributeValues.current && 
        (attributeName != _ATTRIBUTES.POSITION || _self.ngxAlertService.isFloatTypeClass(_self.prefixClass, _self.type))) {
        _classes.push(attributeValues.current); 
      }
    });
    
    _classes.push(this.ngxAlertService.getFadeAnimationClass(this.prefixClass));
    if(!this.ngxAlertService.isHiddenStateClass(this.prefixClass, this.state)){
      _classes.push(this.ngxAlertService.getFadeInAnimationClass(this.prefixClass));
    }
    
    return _classes;
  };
  
  this.show = function () {
    var _self = this,
        _floatTypeClass = this.ngxAlertService.getFloatTypeClass(this.prefixClass),
        _fadeInAnimationClass = this.ngxAlertService.getFadeInAnimationClass(this.prefixClass),
        _cssClasses = [];
    
    ngxBootstrap.forEach(this.cssClass.split(' '), function(cssClass){
      if (cssClass ===  _floatTypeClass && 
          _self.ngxAlertService.isFloatTypeClass(_self.prefixClass, _self.type)) {
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
    this.ngxRenderService.setClass(this.cssClass);
  };

  this.dismiss = function () {
    var _self = this,
        _floatTypeClass = this.ngxAlertService.getFloatTypeClass(this.prefixClass),
        _fadeInAnimationClass = this.ngxAlertService.getFadeInAnimationClass(this.prefixClass),
        _cssClasses = [];
    
    ngxBootstrap.forEach(this.cssClass.split(' '), function(cssClass){
      if (cssClass ===  _floatTypeClass && 
          !_self.ngxAlertService.isFloatTypeClass(_self.prefixClass, _self.type)) {
        _cssClasses.push(cssClass);
      }
      else if(cssClass != _fadeInAnimationClass){
        _cssClasses.push(cssClass);
      }
    });
    
    this.cssClass = _cssClasses.join(' ');
    this.ngxRenderService.setClass(this.cssClass);

    this.dismissEmitter.next({
      target: { id: this.id }
    });
  };
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-alert',
  /*Inject template at here*/
  /*Inject style at here*/
  templateUrl: 'components/alert/templates/alert.bootstrap4.html',
  styleUrls: ['components/alert/css/alert.bootstrap4.css'],
  providers:[ngxRenderService],
  properties: ['id', 'color', 'type', 'position', 'state', 'prefixClass:prefix-class'],
  events: ['dismissEmitter: dismiss'],
})
.Class(new _ngxAlertComponent());