var ngxAlertService = require('./services/alert.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('ngxBootstrap');

function _ngxAlertComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxAlertService,

    function ngxAlertComponent(elementRef, renderer, ngxAlertService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxAlertService = ngxAlertService;

        this.showingEmitter = new ng.core.EventEmitter(false);
        this.shownEmitter = new ng.core.EventEmitter();

        this.dismissingEmitter = new ng.core.EventEmitter(false);
        this.dismissedEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.ngOnChanges = function(changeRecord){
    var _self = this,
        _styleProperties = this.getStyleProperties(),
        _previousIsHidden = this.isHidden;
    this.isHidden = this.propertyHasValue(_styleProperties.STATE, 'hidden');
    this.isDismissible = this.propertyHasValue(_styleProperties.TYPE, 'dismissible');

    if
    (
      _previousIsHidden === undefined ||
      !changeRecord[_styleProperties.STATE] || 
      !this.propertyHasValue(_styleProperties.STATE, 'hidden')
    ){
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
      return;
    }

    if (this.isHidden) {
      this.ngxAlertService.fadeOut(this.elementRef)
      .then(function(){
        _getBaseInstance(_self).ngOnChanges.apply(_self, [changeRecord]);

        _self.dismissedEmitter.emit({
          id: _self.id
        });
      });
    }
    else {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);

      this.ngxAlertService.fadeIn(this.elementRef)
      .then(function(){
        _self.shownEmitter.emit({
          id: _self.id
        });
      });
    }
  };

  this.ngOnInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngOnInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    _getBaseInstance(this).ngOnDestroy.apply(this);
  };


  this.initDefaultValues = function(){
    if(!this.type && !this.isDismissible){ this.isDismissible = false; }

    if(!this.state && !this.isHidden){ this.isHidden = false; }

    return null;
  };

  this.getPrefixClass = function(){
    return 'ngx-alert';
  };
  
  this.subscribe = function () {
    var _self = this;

    this.subscription = this.ngxAlertService.ngxAlert$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxAlertService.getActions();
      
      ngxBootstrap.forEach(_events, function (_event) {
        if (!_event.id || _event.id === _self.id) {
          if (_event.type === _actions.SHOW_ALERT) {
            _self.show();
          }
          else if (_event.type === _actions.DISMISS_ALERT) {
            _self.dismiss();
          }
        }
      });
    });
  };

  this.show = function () {
    if (!this.isHidden) { return; }

    var _isCanceled = false;
    this.showingEmitter.emit({
      id: this.id,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    var _styleProperties = this.getStyleProperties();
    this.removeValueFromProperty(_styleProperties.STATE, 'hidden');
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  this.dismiss = function () {
    if (this.isHidden) { return; }

    var _isCanceled = false;
    this.dismissingEmitter.emit({
      id: this.id,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }
    
    var _styleProperties = this.getStyleProperties();
    this.addValueToProperty(_styleProperties.STATE, 'hidden');
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-alert',
  template: require('./themes/' + __THEME__ + '/templates/alert.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/alert.scss')],
  properties: ['id', 'color', 'type', 'state', 'position', 'initCssClass:class'],
  events: [
    'showingEmitter: onShowing',
    'shownEmitter: onShown',
    'dismissingEmitter: onDismissing',
    'dismissedEmitter: onDismissed'
  ]
})
.Class(new _ngxAlertComponent());