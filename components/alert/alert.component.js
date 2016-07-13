var ngxAlertService = require('./services/alert.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('ngxBootstrap');

function _ngxAlertComponent() {
  var _base,
      _subscription;

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

  this.ngOnChanges = function(){
    var _styleProperties = this.getStyleProperties();
    this.isHidden = this.propertyHasValue(_styleProperties.STATE, 'hidden');
    this.isDismissible = this.propertyHasValue(_styleProperties.TYPE, 'dismissible');

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.ngOnInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngOnInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (_subscription) { _subscription.unsubscribe(); }
  };


  this.initDefaultValues = function(){
    if(!this.type && !this.isDismissible){ this.isDismissible = false; }

    if(!this.state && !this.isHidden){ this.isHidden = false; }

    return null;
  };

  
  this.subscribe = function () {
    var _self = this;

    _subscription = this.ngxAlertService.ngxAlert$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxAlertService.getActions();
      
      ngxBootstrap.forEach(_events, function (_event) {
        if (_event.target && (!_event.target || _event.target === _self.id)) {
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
      target: this.id,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    var _styleProperties = this.getStyleProperties();
    this.removeValueFromProperty(_styleProperties.STATE, 'hidden');
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
    
    var _self = this;
    this.ngxAlertService.fadeIn(this.elementRef)
    .then(function () {
      _self.shownEmitter.emit({
        target: _self.id
      });
    });
  };

  this.dismiss = function () {
    if (this.isHidden) { return; }

    var _isCanceled = false;
    this.dismissingEmitter.emit({
      target: this.id,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }
    
    var _self = this,
        _styleProperties = this.getStyleProperties();
    this.ngxAlertService.fadeOut(this.elementRef)
    .then(function(){
      _self.addValueToProperty(_styleProperties.STATE, 'hidden');
      _self.ngOnChanges(_self.buildChangeRecord(_styleProperties.STATE, _self.state));

      _self.dismissedEmitter.emit({
        target: _self.id
      });
    });
  };
  
  this.getPrefixClass = function(){
    return 'ngx-alert';
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
  ],
})
.Class(new _ngxAlertComponent());