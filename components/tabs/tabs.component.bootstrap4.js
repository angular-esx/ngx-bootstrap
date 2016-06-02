var ngxTabDirective = require('./tab.directive.js');
var ngxTabsService = require('./services/tabs.service.js');
var ngxTranscludeDirective = require('./../../cores/directives/transclude/transclude.directive.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../' + __RENDER_SERVICE__);
var ngxBootstrap = require('./../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../' + __NGX_BOOTSTRAP_UTILS__);

function _ngxTabsComponent() {
  var _base,
      _subscription,
      _currentActiveTab;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxTabsService,

    function ngxTabsComponent(elementRef, ngxRenderService, ngxTabsService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxTabsService = ngxTabsService;

        this.changingTabEmitter = new ng.core.EventEmitter(false);
        this.changedTabEmitter = new ng.core.EventEmitter();
      }
    }
  ];

  this.ngAfterContentInit = function () {
    if (!this.tabs) { return 'ngxTab is required at least one'; }

    this.subscribe();

    _currentActiveTab = { index: 0, item: this.tabs.first };
    _currentActiveTab.item.activate(true);

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  this.ngOnDestroy = function () {
    if (_subscription) { _subscription.unsubscribe(); }
  };

  this.subscribe = function () {
    var _self = this;
    _subscription = this.ngxTabsService.ngxTabs$.subscribe(function (event) {
      if (!event) { return; }

      var _events = ngxBootstrap.isArray(event) ? event : [event];
      var _actions = _self.ngxTabsService.getActions();
      var _tabs = _self.tabs.toArray();

      ngxBootstrap.forEach(_events, function (_event) {
        if (_event.target) {
          ngxBootstrap.forEach(_tabs, function (tab, index) {
            if (tab.elementRef.nativeElement === _event.target) {
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
      
      if (_tabs.indexOf(_currentActiveTab.item) > -1) {
        ngxBootstrap.forEach(_tabs, function (tab, index) {
          if (tab === _currentActiveTab.item) {
            _currentActiveTab.index = index;
            return true;
          }
        });
      }
      else {
        if (_tabs.length > _currentActiveTab.index) {
          _currentActiveTab.item = _tabs[_currentActiveTab.index];
        }
        else if (_currentActiveTab.index >= _tabs.length) {
          _currentActiveTab.index = _tabs.length - 1;
          _currentActiveTab.item = _tabs[_currentActiveTab.index];
        }
        else {
          _currentActiveTab = null;
        }
      }

      if (_currentActiveTab) { _currentActiveTab.item.activate(true); }

    });
  };

  this.enable = function (tab, isEnabled) {
    if (!tab) { return; }

    tab.enable(isEnabled);
  };

  this.select = function (tab, index) {
    if (!tab || tab.isDisabled || (_currentActiveTab && _currentActiveTab.item === tab)) { return; }

    var _isCanceled = false;
    this.changingTabEmitter.emit({
      target: tab,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    if (_currentActiveTab) {
      _currentActiveTab.item.activate(false);

      _currentActiveTab.index = index;
      _currentActiveTab.item = tab;
    }
    else {
      _currentActiveTab = { index: index, item: tab };
    }
    
    _currentActiveTab.item.activate(true);

    this.changedTabEmitter.emit({
      target: tab
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

module.exports = ng.core.Component({
  selector: 'ngx-tabs',
  template: '﻿<div class=\"ngx-tab-heads\">\r\n  <div *ngFor=\"let tab of tabs; let i=index; trackBy:trackByTabs\"\r\n       [class.ngx-tab-head-state-active]=\"tab.isActive\"\r\n       [class.ngx-tab-head-state-disabled]=\"tab.isDisabled\"\r\n       (click)=\"select(tab, i)\"\r\n       class=\"ngx-tab-head\">\r\n    <span *ngIf=\"tab.headTemplateRef\" [ngxTransclude]=\"tab.headTemplateRef\"></span>\r\n    <span *ngIf=\"!tab.headTemplateRef\">{{tab.head}}</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ngx-tab-contents\">\r\n  <ng-content></ng-content>\r\n</div>',
  styles: ['﻿:host(.ngx-tabs) > .ngx-tab-heads { display: block; padding-left: 0; margin-bottom: 1rem; margin-top: 0; border-bottom: 1px solid #ddd; } :host(.ngx-tabs) > .ngx-tab-heads::after { display: table; clear: both; content: ""; } :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head { display: block; float: left; margin-bottom: -1px; padding: .5em 1em; border: 1px solid transparent; border-radius: .25rem .25rem 0 0; } :host(.ngx-tabs) > .ngx-tab-heads .ngx-tab-head + .ngx-tab-head { margin-left: .2rem; } :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head:focus, :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head:hover, :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-active, :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-active:focus, :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-active:hover { color: #55595c; background-color: #fff; border-color: #eceeef #eceeef #ddd; text-decoration: none; cursor: pointer; } :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-active, :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-active:focus, :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-active:hover{ border-color: #ddd #ddd transparent; } :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-disabled, :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-disabled:focus, :host(.ngx-tabs) > .ngx-tab-heads > .ngx-tab-head.ngx-tab-head-state-disabled:hover { color: #818a91; cursor: not-allowed; background-color: transparent; border-color: transparent; } :host(.ngx-tabs) > .ngx-tab-contents{ display: block; } :host(.ngx-tabs) > .ngx-tab-contents > .ngx-tab { display: none; opacity: 0; } :host(.ngx-tabs) > .ngx-tab-contents > .ngx-tab.ngx-tab-state-active { display: block; }'],
  directives: [ngxTranscludeDirective],
  providers: [ngxRenderService],
  properties: ['prefixClass:prefix-class'],
  events: ['changingTabEmitter: changingTab', 'changedTabEmitter: changedTab'],
  queries: {
    tabs: new ng.core.ContentChildren(ngxTabDirective)
  }
})
.Class(new _ngxTabsComponent());