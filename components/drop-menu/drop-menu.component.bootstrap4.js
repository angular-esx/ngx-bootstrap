var ngxDropMenuService = require('./services/drop-menu.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

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
  template: '﻿<ng-content></ng-content>',
  styles: [':host(.ngx-drop-menu) > h1, :host(.ngx-drop-menu) > h2, :host(.ngx-drop-menu) > h3, :host(.ngx-drop-menu) > h4, :host(.ngx-drop-menu) > h5, :host(.ngx-drop-menu) > h6 { margin-top: 0; margin-bottom: .5rem; } :host(.ngx-drop-menu) > hr { height: 0; border-width: 0 0 0 0; border-top-width: 1px; border-style: solid; box-sizing: content-box; } :host(.ngx-drop-menu) { display: none; position: absolute; top: 100%; left: 0; padding: 0.3rem 0; margin: 0.1rem 0 0; min-width: 160px; z-index: 1000; font-size: 1rem; text-align: left; color: #373a3c; background-color: white; background-clip: padding-box; border: 1px solid #bfbfbf; border-radius: 0.25rem; } :host(.ngx-drop-menu) > * { float: left; width: 100%; box-sizing: border-box; } :host(.ngx-drop-menu).ngx-drop-menu-state-active { display: inline; } :host(.ngx-drop-menu).ngx-drop-menu-position-left { right: auto; left: 0; } :host(.ngx-drop-menu).ngx-drop-menu-position-right { right: 0; left: auto; } :host(.ngx-drop-menu).ngx-drop-menu-type-dropup { top: auto; bottom: 100%; margin-bottom: 2px; } :host(.ngx-drop-menu) > h1, :host(.ngx-drop-menu) > h2, :host(.ngx-drop-menu) > h3, :host(.ngx-drop-menu) > h4, :host(.ngx-drop-menu) > h5, :host(.ngx-drop-menu) > h6 { display: block; padding: 0.3rem 1rem; font-size: 0.875rem; line-height: 1.5; white-space: nowrap; color: #bfbfbf; } :host(.ngx-drop-menu) > hr { margin: 0.5rem 0; color: transparent; background-color: #bfbfbf; } :host(.ngx-drop-menu) > .ngx-drop-menu-item, :host(.ngx-drop-menu) > a { display: block; text-align: inherit; text-decoration: none; font-weight: normal; line-height: 1.5; white-space: nowrap; padding: 0.3rem 1rem; clear: both; color: #373a3c; background: white; border: 0; cursor: pointer; } :host(.ngx-drop-menu) > .ngx-drop-menu-item:focus, :host(.ngx-drop-menu) > .ngx-drop-menu-item:hover, :host(.ngx-drop-menu) > .ngx-drop-menu-item.ngx-drop-menu-item-state-active, :host(.ngx-drop-menu) > a:focus, :host(.ngx-drop-menu) > a:hover, :host(.ngx-drop-menu) > a.ngx-drop-menu-item-state-active { color: #373a3c; background-color: rgba(191, 191, 191, 0.2); outline: 0; } :host(.ngx-drop-menu) > .ngx-drop-menu-item.ngx-drop-menu-item-state-disabled, :host(.ngx-drop-menu) > a.ngx-drop-menu-item-state-disabled { color: rgba(55, 58, 60, 0.65); background-color: transparent; background-image: none; cursor: not-allowed; } '],
  providers: [ngxRenderService],
  properties: ['state', 'position', 'prefixClass:prefix-class']
})
.Class(new _ngxDropMenuComponent());