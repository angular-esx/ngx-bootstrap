var ngxAlertService = require('./services/alert.service.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxAlertComponent() {
  var _base,
      _subscription;
  var _ATTRIBUTES = {
    POSITION: 'position'
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

        this.showingEmitter = new ng.core.EventEmitter(false);
        this.shownEmitter = new ng.core.EventEmitter();

        this.dismissingEmitter = new ng.core.EventEmitter(false);
        this.dismissedEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.ngAfterContentInit = function () {
    this.isDismissible = this.ngxAlertService.isDismissibleTypeClass(this.getPrefixClass(), this.type);

    this.subscribe();

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (_subscription) { _subscription.unsubscribe(); }
  };

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
  
  this.subscribe = function () {
    var _self = this;

    _subscription = this.ngxAlertService.ngxAlert$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxAlertService.getActions();
      
      ngxBootstrap.forEach(_events, function (_event) {
        if (_event.target && _event.target === _self.elementRef.nativeElement) {

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
    if (!this.ngxAlertService.isHiddenStateClass(this.getPrefixClass(), this.state)) { return; }

    var _isCanceled = false;
    this.showingEmitter.emit({
      target: this,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    var _changeRecord = {
      state: { previousValue: this.state || '' }
    };
    this.state = this.state.replace(this.ngxAlertService.getStates().HIDDEN, '').trim();
    _changeRecord.state.currentValue = this.state;

    this.ngOnChanges(_changeRecord);

    var _self = this;
    this.ngxAlertService.fadeIn(this.elementRef.nativeElement)
    .then(function () {
      _self.shownEmitter.emit({
        target: _self
      });
    });
  };

  this.dismiss = function () {
    if (this.ngxAlertService.isHiddenStateClass(this.getPrefixClass(), this.state)) { return; }

    var _isCanceled = false;
    this.dismissingEmitter.emit({
      target: this,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    var _self = this;
    this.ngxAlertService.fadeOut(this.elementRef.nativeElement)
    .then(function(){
      var _changeRecord = {
        state: { previousValue: _self.state || '' }
      };
      _self.state = (_self.ngxAlertService.getStates().HIDDEN + ' ' + _changeRecord.state.previousValue).trim();
      _changeRecord.state.currentValue = _self.state;

      _self.ngOnChanges(_changeRecord);

      _self.dismissedEmitter.emit({
        target: _self
      });
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
  providers:[ngxRenderService],
  properties: ['color', 'type', 'position', 'state', 'prefixClass:prefix-class'],
  events: [
    'showingEmitter: showing',
    'shownEmitter: shown',
    'dismissingEmitter: dismissing',
    'dismissedEmitter: dismissed'
  ],
})
.Class(new _ngxAlertComponent());