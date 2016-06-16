var ngxDropMenuService = require('./services/drop-menu.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxDropMenuComponent() {
  var _base,
      _subscription;
  var _ATTRIBUTES = {
    POSITION: 'position'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxDropMenuService,

    function ngxDropMenuComponent(elementRef, ngxRenderService, ngxDropMenuService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxDropMenuService = ngxDropMenuService;
      }
    }
  ];

  this.ngAfterContentInit = function () {
    this.subscribe();

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (_subscription) { _subscription.unsubscribe(); }
  };

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = _getBaseInstance(this).onAggregatePropertyValueState.apply(this, arguments);

    if (this.ngxDropMenuService.getPositionClass) {
      _aggregate[_ATTRIBUTES.POSITION] = {
        prev: this.ngxDropMenuService.getPositionClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.POSITION)),
        current: this.ngxDropMenuService.getPositionClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.POSITION))
      };
    }

    return _aggregate;
  };

  this.subscribe = function () {
    var _self = this;

    _subscription = this.ngxDropMenuService.ngxDropMenu$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxDropMenuService.getActions();

      ngxBootstrap.forEach(_events, function (_event) {
        if (_event.target && _event.target === _self.elementRef.nativeElement) {

          if (_event.type === _actions.TOGGLE_DROPDOWN) {
            _self.toggleDropdown();
          }
          else if (_event.type === _actions.TOGGLE_DROPUP){
            _self.toggleDropup();
          }
        }
      });
    });
  };

  this.toggleDropdown = function () {
    var _isActive = this.ngxDropMenuService.isActiveStateClass(this.getPrefixClass(), this.state);
    var _types = this.ngxDropMenuService.getTypes();

    var _changeRecord = {
      state: { previousValue: this.state || '' },
      type: { previousValue: this.type || '' }
    };
    if (_isActive) {
      this.state = this.state.replace(this.ngxDropMenuService.getStates().ACTIVE, '').trim();
    }
    else {
      this.state = (this.ngxDropMenuService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
    }
    _changeRecord.state.currentValue = this.state;
    
    if(_changeRecord.type.previousValue){
      _changeRecord.type.previousValue = this.type = _changeRecord.type.previousValue.replace(_types.DROPDOWN, '').trim();
    }
    this.type = (_types.DROPDOWN + ' ' + _changeRecord.state.previousValue).trim();
    _changeRecord.type.currentValue = this.type;

    this.ngOnChanges(_changeRecord);
  };

  this.toggleDropup = function () {
    var _isActive = this.ngxDropMenuService.isActiveStateClass(this.getPrefixClass(), this.state);
    var _types = this.ngxDropMenuService.getTypes();

    var _changeRecord = {
      state: { previousValue: this.state || '' },
      type: { previousValue: this.type || '' }
    };
    if (_isActive) {
      this.state = this.state.replace(this.ngxDropMenuService.getStates().ACTIVE, '').trim();
    }
    else {
      this.state = (this.ngxDropMenuService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
    }
    _changeRecord.state.currentValue = this.state;

    if (_changeRecord.type.previousValue) {
      _changeRecord.type.previousValue = this.type = _changeRecord.type.previousValue.replace(_types.DROPUP, '').trim();
    }
    this.type = (_types.DROPUP + ' ' + _changeRecord.state.previousValue).trim();
    _changeRecord.type.currentValue = this.type;

    this.ngOnChanges(_changeRecord);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-drop-menu',
  template: require('./themes/' + __THEME__ + '/templates/drop-menu.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/drop-menu.scss')],
  providers: [ngxRenderService],
  properties: ['state', 'position', 'prefixClass:prefix-class']
})
.Class(new _ngxDropMenuComponent());