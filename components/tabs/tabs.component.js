import * as ngCore from '@angular/core';
import { ngxBaseComponent, ngxPortalHostDirective, ngxUtils } from  '../cores';
import ngxTabDirective from './tab.directive';
import ngxTabsService from './services/tabs.service';

function _ngxTabsComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngxTabsService,

    function ngxTabsComponent(elementRef, renderer, ngxTabsService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxTabsService = ngxTabsService;

        this.changingTabEmitter = new ngCore.EventEmitter(false);
        this.changedTabEmitter = new ngCore.EventEmitter();
      }
    }
  ];

  this.ngAfterContentInit = function () {
    if (!this.tabs) { return 'ngxTab is required at least one'; }

    this.subscribe();

    this.currentActiveTab = { index: 0, item: this.tabs.first };
    this.currentActiveTab.item.activate(true);

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    _getBaseInstance(this).ngOnDestroy.apply(this);
  };

  this.getPrefixClass = function () {
    return 'ngx-tabs';
  };

  this.subscribe = function () {
    var _self = this;
    this.subscription = this.ngxTabsService.ngxTabs$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxTabsService.getActions();
      var _tabs = _self.tabs.toArray();

      ngxUtils.forEach(_events, function (_event) {
        if (_event.id) {
          ngxUtils.forEach(_tabs, function (tab, index) {
            if (tab.id === _event.id) {
              if (_event.type === _actions.ENABLE_TAB) {
                _self.enable(tab, _event.isEnabled);
              }
              else if (_event.type === _actions.SELECT_TAB) {
                _self.select(tab, index);
              }

              return true;
            }
          });
        }
      });
    });

    this.tabs.changes.subscribe(function (tabs) {
      var _tabs = tabs.toArray();
      
      if (_tabs.indexOf(_self.currentActiveTab.item) > -1) {
        ngxUtils.forEach(_tabs, function (tab, index) {
          if (tab === _self.currentActiveTab.item) {
            _self.currentActiveTab.index = index;
            return true;
          }
        });
      }
      else {
        if (_tabs.length > _self.currentActiveTab.index) {
          _self.currentActiveTab.item = _tabs[_self.currentActiveTab.index];
        }
        else if (_self.currentActiveTab.index >= _tabs.length) {
          _self.currentActiveTab.index = _tabs.length - 1;
          _self.currentActiveTab.item = _tabs[_self.currentActiveTab.index];
        }
        else {
          _self.currentActiveTab = null;
        }
      }

      if (_self.currentActiveTab) { _self.currentActiveTab.item.activate(true); }

    });
  };

  this.enable = function (tab, isEnabled) {
    if (!tab) { return; }

    tab.enable(isEnabled);
  };

  this.select = function (tab, index) {
    if (!tab || tab.isDisabled || (this.currentActiveTab && this.currentActiveTab.item === tab)) { return; }

    var _isCanceled = false;
    this.changingTabEmitter.emit({
      id: tab.id,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    if (this.currentActiveTab) {
      this.currentActiveTab.item.activate(false);

      this.currentActiveTab.index = index;
      this.currentActiveTab.item = tab;
    }
    else {
      this.currentActiveTab = { index: index, item: tab };
    }
    
    this.currentActiveTab.item.activate(true);

    this.changedTabEmitter.emit({
      id: tab.id
    });
  };
  
  this.trackByTabs = function (index, tab) {
    return tab.id;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var ngxTabsComponent = ngCore.Component({
  selector: 'ngx-tabs',
  templateUrl: './templates/tabs.html',
  styleUrls: ['./scss/tabs.scss'],
  directives: [ngxPortalHostDirective],
  properties: ['type', 'initCssClass:class'],
  events: ['changingTabEmitter: onChangingTab', 'changedTabEmitter: onChangedTab'],
  queries: {
    tabs: new ngCore.ContentChildren(ngxTabDirective)
  }
})
.Class(new _ngxTabsComponent());