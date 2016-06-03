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
  template: '<button type=\"button\" class=\"ngx-alert-close\" *ngIf=\"isDismissible\" (click)=\"dismiss()\">\r\n  <span>&times;</span>\r\n</button>\r\n<ng-content></ng-content>',
  styles: [':host(.ngx-alert) { display: block; padding: 15px; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem; } :host(.ngx-alert.ngx-alert-state-hidden) { display: none !important; } :host(.ngx-alert) > p, :host(.ngx-alert) > ul { margin-bottom: 0; } :host(.ngx-alert) > p + p { margin-top: 5px; } :host(.ngx-alert.ngx-alert-type-dismissible) { padding-right: 35px; } :host(.ngx-alert.ngx-alert-type-dismissible) .ngx-alert-dismiss { position: relative; top: -2px; right: -21px; color: inherit; } :host(.ngx-alert.ngx-alert-type-float) { position: fixed; width: 100%; } :host(.ngx-alert.ngx-alert-position-top) { top: 0; } :host(.ngx-alert.ngx-alert-position-bottom) { bottom: 0; } :host(.ngx-alert) > .ngx-alert-close { position: relative; top: -2px; right: -21px; color: inherit; float: right; font-size: 1.5rem; font-weight: 700; line-height: 1; text-shadow: 0 1px 0 #fff; opacity: .2; padding: 0; cursor: pointer; background: transparent; border: 0; -webkit-appearance: none; } :host(.ngx-alert) > .ngx-alert-close:focus, :host(.ngx-alert) > .ngx-alert-close:hover { color: #000; text-decoration: none; cursor: pointer; opacity: .5; } :host(.ngx-alert) > .ngx-alert-link > a, :host(.ngx-alert) > .ngx-link > a, :host(.ngx-alert) > a { font-weight: bold; } :host(.ngx-alert.ngx-alert-color-success) { color: #3c763d; background-color: #dff0d8; border-color: #d0e9c6; } :host(.ngx-alert.ngx-alert-color-success) > hr { border-top-color: #c1e2b3; } :host(.ngx-alert.ngx-alert-color-success) > .ngx-alert-link > a, :host(.ngx-alert.ngx-alert-color-success) > .ngx-link > a, :host(.ngx-alert.ngx-alert-color-success) > a { color: #2b542c; } :host(.ngx-alert.ngx-alert-color-info) { color: #31708f; background-color: #d9edf7; border-color: #bcdff1; } :host(.ngx-alert.ngx-alert-color-info) > hr { border-top-color: #a6d5ec; } :host(.ngx-alert.ngx-alert-color-info) > .ngx-alert-link > a, :host(.ngx-alert.ngx-alert-color-info) > .ngx-link > a, :host(.ngx-alert.ngx-alert-color-info) > a { color: #245269; } :host(.ngx-alert.ngx-alert-color-warning) { color: #8a6d3b; background-color: #fcf8e3; border-color: #faf2cc; } :host(.ngx-alert.ngx-alert-color-warning) > hr { border-top-color: #f7ecb5; } :host(.ngx-alert.ngx-alert-color-warning) > .ngx-alert-link > a, :host(.ngx-alert.ngx-alert-color-warning) > .ngx-link > a, :host(.ngx-alert.ngx-alert-color-warning) > a { color: #66512c; } :host(.ngx-alert.ngx-alert-color-danger) { color: #a94442; background-color: #f2dede; border-color: #ebcccc; } :host(.ngx-alert.ngx-alert-color-danger) > hr { border-top-color: #e4b9b9; } :host(.ngx-alert.ngx-alert-color-danger) > .ngx-alert-link > a, :host(.ngx-alert.ngx-alert-color-danger) > .ngx-link > a, :host(.ngx-alert.ngx-alert-color-danger) > a { color: #843534; } '],
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