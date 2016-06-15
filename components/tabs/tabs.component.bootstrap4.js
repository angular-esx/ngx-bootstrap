var ngxTabDirective = require('./tab.directive.js');
var ngxTabsService = require('./services/tabs.service.js');
var ngxTranscludeDirective = require('./../../cores/directives/transclude/transclude.directive.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../' + __RENDER_SERVICE__);
var ngxBootstrap = require('./../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../' + __NGX_BOOTSTRAP_UTILS__);

function _ngxTabsComponent() {
  var _base,
      _subscription;

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

    this.currentActiveTab = { index: 0, item: this.tabs.first };
    this.currentActiveTab.item.activate(true);

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
      
      if (_tabs.indexOf(_self.currentActiveTab.item) > -1) {
        ngxBootstrap.forEach(_tabs, function (tab, index) {
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
      target: tab,
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
  template: '﻿<div class=\"ngx-tabs-heads\">\r\n  <div *ngFor=\"let tab of tabs; let i=index; trackBy:trackByTabs\"\r\n       [class.ngx-tabs-head-state-active]=\"tab.isActive\"\r\n       [class.ngx-tabs-head-state-disabled]=\"tab.isDisabled\"\r\n       (click)=\"select(tab, i)\"\r\n       class=\"ngx-tabs-head\">\r\n    <span *ngIf=\"tab.headTemplateRef\" [ngxTransclude]=\"tab.headTemplateRef\"></span>\r\n    <span *ngIf=\"!tab.headTemplateRef\">{{tab.head}}</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ngx-tabs-contents\">\r\n  <ng-content></ng-content>\r\n</div>',
  styles: [':host(.ngx-tabs) > .ngx-tabs-heads { display: block; padding: 0; margin: 0 0 1rem 0; border-bottom: 1px solid #bfbfbf; } :host(.ngx-tabs) > .ngx-tabs-heads::after { content: ""; display: table; clear: both; } :host(.ngx-tabs) > .ngx-tabs-heads > .ngx-tabs-head { display: block; float: left; color: #373a3c; background-color: transparent; text-decoration: none; padding: 0.5em 1em; margin: 0 0 -1px 0; border: 1px solid transparent; cursor: pointer; border-top-right-radius: 0.25rem; border-top-left-radius: 0.25rem; } :host(.ngx-tabs) > .ngx-tabs-heads > .ngx-tabs-head + .ngx-tabs-head { margin-left: .2rem; } :host(.ngx-tabs) > .ngx-tabs-heads > .ngx-tabs-head:focus, :host(.ngx-tabs) > .ngx-tabs-heads > .ngx-tabs-head:hover { border-color: rgba(191, 191, 191, 0.5) rgba(191, 191, 191, 0.5) rgba(191, 191, 191, 0.5); } :host(.ngx-tabs) > .ngx-tabs-heads > .ngx-tabs-head.ngx-tabs-head-state-active { color: #373a3c; background-color: white; border-color: #bfbfbf #bfbfbf transparent; } :host(.ngx-tabs) > .ngx-tabs-heads > .ngx-tabs-head.ngx-tabs-head-state-disabled { color: #dfdfdf; border-color: transparent; cursor: not-allowed; } :host(.ngx-tabs).ngx-tabs-type-pill > .ngx-tabs-heads { border-bottom: initial; } :host(.ngx-tabs).ngx-tabs-type-pill > .ngx-tabs-heads > .ngx-tabs-head { color: #373a3c; border: initial; border-radius: 0.25rem; } :host(.ngx-tabs).ngx-tabs-type-pill > .ngx-tabs-heads > .ngx-tabs-head.ngx-tabs-head-state-active { color: white; background-color: #0270d2; } :host(.ngx-tabs).ngx-tabs-type-pill > .ngx-tabs-heads > .ngx-tabs-head.ngx-tabs-head-state-active a { color: white; } :host(.ngx-tabs).ngx-tabs-type-pill > .ngx-tabs-heads > .ngx-tabs-head.ngx-tabs-head-state-disabled { color: #dfdfdf; } :host(.ngx-tabs) > .ngx-tabs-contents { display: block; } :host(.ngx-tabs) > .ngx-tabs-contents > .ngx-tab { display: none; opacity: 0; } :host(.ngx-tabs) > .ngx-tabs-contents > .ngx-tab.ngx-tab-state-active { display: block; } '],
  directives: [ngxTranscludeDirective],
  providers: [ngxRenderService],
  properties: ['type', 'prefixClass:prefix-class'],
  events: ['changingTabEmitter: changingTab', 'changedTabEmitter: changedTab'],
  queries: {
    tabs: new ng.core.ContentChildren(ngxTabDirective)
  }
})
.Class(new _ngxTabsComponent());