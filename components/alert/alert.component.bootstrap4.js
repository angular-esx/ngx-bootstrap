var ngxAlertService = require('./services/alert.service.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
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
        prev: this.ngxAlertService.getPositionClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.POSITION)),
        current: this.ngxAlertService.getPositionClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.POSITION))
      };
    }
    
    return _aggregate;
  };
  
  this.onBuildOwnCssClass = function (aggregate) {
    var _prefixClass = this.getPrefixClass();
    this.isDismissible = this.ngxAlertService.isDismissibleTypeClass(_prefixClass, this.type);
    
    var _self = this;
    _classes = [_prefixClass];
    
    ngxBootstrap.forEach(aggregate, function(attributeValues, attributeName){
      if(attributeValues.current && 
        (attributeName != _ATTRIBUTES.POSITION || _self.ngxAlertService.isFloatTypeClass(_self.prefixClass, _self.type))) {
        _classes.push(attributeValues.current); 
      }
    });
    
    _classes.push(this.ngxAlertService.getFadeAnimationClass(_prefixClass));
    if (!this.ngxAlertService.isHiddenStateClass(_prefixClass, this.state)) {
      _classes.push(this.ngxAlertService.getFadeInAnimationClass(_prefixClass));
    }
    
    return _classes;
  };
  
  this.show = function () {
    var _self = this,
        _prefixClass = this.getPrefixClass(),
        _floatTypeClass = this.ngxAlertService.getFloatTypeClass(_prefixClass),
        _fadeInAnimationClass = this.ngxAlertService.getFadeInAnimationClass(_prefixClass),
        _cssClasses = [];
    
    ngxBootstrap.forEach(this.cssClass.split(' '), function(cssClass){
      if (cssClass ===  _floatTypeClass && 
          _self.ngxAlertService.isFloatTypeClass(_prefixClass, _self.type)) {
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
        _prefixClass = this.getPrefixClass(),
        _floatTypeClass = this.ngxAlertService.getFloatTypeClass(_prefixClass),
        _fadeInAnimationClass = this.ngxAlertService.getFadeInAnimationClass(_prefixClass),
        _cssClasses = [];
    
    ngxBootstrap.forEach(this.cssClass.split(' '), function(cssClass){
      if (cssClass ===  _floatTypeClass && 
          !_self.ngxAlertService.isFloatTypeClass(_prefixClass, _self.type)) {
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
  template: '<button type=\"button\" class=\"ngx-alert-close\" *ngIf=\"isDismissible\" (click)=\"dismiss()\">\r\n  <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n<ng-content></ng-content>',
  styles: [':host(.ngx-alert) { display: block; padding: 15px; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem; } :host(.ngx-alert) > p, :host(.ngx-alert) > ul { margin-bottom: 0; } :host(.ngx-alert) > p + p { margin-top: 5px; } :host(.ngx-alert-type-dismissible) { padding-right: 35px; } :host(.ngx-alert-type-dismissible) /deep/ .ngx-alert-dismiss { position: relative; top: -2px; right: -21px; color: inherit; } :host(.ngx-alert-type-float) { position: fixed; width: 100%; } :host(.ngx-alert-position-top) { top: 0; } :host(.ngx-alert-position-bottom) { bottom: 0; } :host(.ngx-alert-animation-fade) { opacity: 0; transition: opacity .15s linear; } :host(.ngx-alert-animation-fade-in) { opacity: 1; } :host(.ngx-alert) /deep/ .ngx-alert-close { position: relative; top: -2px; right: -21px; color: inherit; float: right; font-size: 1.5rem; font-weight: 700; line-height: 1; text-shadow: 0 1px 0 #fff; opacity: .2; padding: 0; cursor: pointer; background: transparent; border: 0; -webkit-appearance: none; } :host(.ngx-alert) /deep/ .ngx-alert-close:focus, :host(.ngx-alert) /deep/ .ngx-alert-close:hover { color: #000; text-decoration: none; cursor: pointer; opacity: .5; } :host(.ngx-alert) /deep/ .ngx-alert-link > a, :host(.ngx-alert) /deep/ .ngx-link > a, :host(.ngx-alert) /deep/ > a { font-weight: bold; } :host(.ngx-alert-color-success) { color: #3c763d; background-color: #dff0d8; border-color: #d0e9c6; } :host(.ngx-alert-color-success) /deep/ hr { border-top-color: #c1e2b3; } :host(.ngx-alert-color-success) /deep/ .ngx-alert-link > a, :host(.ngx-alert-color-success) /deep/ .ngx-link > a, :host(.ngx-alert-color-success) /deep/ > a { color: #2b542c; } :host(.ngx-alert-color-info) { color: #31708f; background-color: #d9edf7; border-color: #bcdff1; } :host(.ngx-alert-color-info) /deep/ hr { border-top-color: #a6d5ec; } :host(.ngx-alert-color-info) /deep/ .ngx-alert-link > a, :host(.ngx-alert-color-info) /deep/ .ngx-link > a, :host(.ngx-alert-color-info) /deep/ > a { color: #245269; } :host(.ngx-alert-color-warning) { color: #8a6d3b; background-color: #fcf8e3; border-color: #faf2cc; } :host(.ngx-alert-color-warning) /deep/ hr { border-top-color: #f7ecb5; } :host(.ngx-alert-color-warning) /deep/ .ngx-alert-link > a, :host(.ngx-alert-color-warning) /deep/ .ngx-link > a, :host(.ngx-alert-color-warning) /deep/ > a { color: #66512c; } :host(.ngx-alert-color-danger) { color: #a94442; background-color: #f2dede; border-color: #ebcccc; } :host(.ngx-alert-color-danger) /deep/ hr { border-top-color: #e4b9b9; } :host(.ngx-alert-color-danger) /deep/ .ngx-alert-link > a, :host(.ngx-alert-color-danger) /deep/ .ngx-link > a, :host(.ngx-alert-color-danger) /deep/ > a { color: #843534; }'],
  templateUrl: 'components/alert/templates/alert.bootstrap4.html',
  styleUrls: ['components/alert/css/alert.bootstrap4.css'],
  providers:[ngxRenderService],
  properties: ['id', 'color', 'type', 'position', 'state', 'prefixClass:prefix-class'],
  events: ['dismissEmitter: dismiss'],
})
.Class(new _ngxAlertComponent());