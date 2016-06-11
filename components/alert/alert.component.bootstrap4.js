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
  template: '<button type=\"button\" class=\"ngx-alert-dismiss\" *ngIf=\"isDismissible\" (click)=\"dismiss()\">\r\n  <span>&times;</span>\r\n</button>\r\n<ng-content></ng-content>',
  styles: [':host(.ngx-alert) hr { height: 0; border-width: 0 0 0 0; border-top-width: 1px; border-style: solid; box-sizing: content-box; } :host(.ngx-alert) a { text-decoration: none; background-color: transparent; cursor: pointer; } :host(.ngx-alert) a:focus, :host(.ngx-alert) a:hover, :host(.ngx-alert) a:active { outline: 0; } :host(.ngx-alert) { display: block; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; margin: 0 0 1rem 0; padding: 1rem; border: 1px solid transparent; border-radius: 0.25rem; } :host(.ngx-alert) a { text-decoration: underline; } :host(.ngx-alert) > p, :host(.ngx-alert) > ul { margin-bottom: 0; } :host(.ngx-alert) > p + p { margin-top: 5px; } :host(.ngx-alert).ngx-alert-state-hidden { display: none !important; } :host(.ngx-alert).ngx-alert-type-float { width: 100%; margin: 0; position: fixed; left: 0; border-radius: 0; box-sizing: border-box; } :host(.ngx-alert).ngx-alert-position-top { top: 0; } :host(.ngx-alert).ngx-alert-position-bottom { bottom: 0; } :host(.ngx-alert).ngx-alert-type-dismissible { padding: 1rem 2rem 1rem 1rem; } :host(.ngx-alert) > .ngx-alert-dismiss { font-size: 1.5rem; font-weight: 700; line-height: 1; color: #9f9f9f; background: transparent; padding: 0; border: 0; opacity: .2; position: relative; float: right; top: -2px; right: -21px; text-decoration: none; cursor: pointer; -webkit-appearance: none; } :host(.ngx-alert) > .ngx-alert-dismiss:focus, :host(.ngx-alert) > .ngx-alert-dismiss:hover { opacity: .5; } :host(.ngx-alert).ngx-alert-color-info { color: #60c2df; background-color: rgba(149, 215, 234, 0.4); border-color: rgba(149, 215, 234, 0.4); } :host(.ngx-alert).ngx-alert-color-info hr { border-top-color: #60c2df; } :host(.ngx-alert).ngx-alert-color-info .ngx-alert-link, :host(.ngx-alert).ngx-alert-color-info .ngx-alert-link a { font-weight: bold; color: #60c2df; } :host(.ngx-alert).ngx-alert-color-success { color: #5cb85c; background-color: rgba(137, 203, 137, 0.4); border-color: rgba(137, 203, 137, 0.4); } :host(.ngx-alert).ngx-alert-color-success hr { border-top-color: #5cb85c; } :host(.ngx-alert).ngx-alert-color-success .ngx-alert-link, :host(.ngx-alert).ngx-alert-color-success .ngx-alert-link a { font-weight: bold; color: #5cb85c; } :host(.ngx-alert).ngx-alert-color-warning { color: #f0ad4e; background-color: rgba(245, 200, 137, 0.4); border-color: rgba(245, 200, 137, 0.4); } :host(.ngx-alert).ngx-alert-color-warning hr { border-top-color: #f0ad4e; } :host(.ngx-alert).ngx-alert-color-warning .ngx-alert-link, :host(.ngx-alert).ngx-alert-color-warning .ngx-alert-link a { font-weight: bold; color: #f0ad4e; } :host(.ngx-alert).ngx-alert-color-danger { color: #da5350; background-color: rgba(228, 135, 133, 0.4); border-color: rgba(228, 135, 133, 0.4); } :host(.ngx-alert).ngx-alert-color-danger hr { border-top-color: #da5350; } :host(.ngx-alert).ngx-alert-color-danger .ngx-alert-link, :host(.ngx-alert).ngx-alert-color-danger .ngx-alert-link a { font-weight: bold; color: #da5350; } '],
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