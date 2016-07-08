var ngxTabDirective = require('./tab.directive.js');
var ngxTabsService = require('./services/tabs.service.js');
var ngxTranscludeDirective = require('cores/directives/transclude/transclude.directive.js');
var ngxBaseComponent = require('baseComponent');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('utils');

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
  template: require('./themes/' + __THEME__ + '/templates/tabs.html'),
  styles: [require('./themes/' + __THEME__  + '/scss/tabs.scss')],
  directives: [ngxTranscludeDirective],
  providers: [ngxRenderService],
  properties: ['type', 'prefixClass:prefix-class'],
  events: ['changingTabEmitter: onChangingTab', 'changedTabEmitter: onChangedTab'],
  queries: {
    tabs: new ng.core.ContentChildren(ngxTabDirective)
  }
})
.Class(new _ngxTabsComponent());