var ngxAnimationService = require('animationService');
var ngxBootstrap = require('ngxBootstrap');

function _ngxTabsService() {
  var _observer;
  var _ACTIONS = {
    ENABLE_TAB: 'ENABLE_TAB',
    SELECT_TAB: 'SELECT_TAB'
  };

  this.constructor = [
    ngxAnimationService,

    function ngxTabsService(ngxAnimationService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);

      this.ngxTabs$ = new Rx.Observable(function (observer) {
        _observer = observer;
      })
    .share();
    }
  ];

  this.getActions = function () {
    return ngxBootstrap.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    _observer.next(event);
  };

  this.getEnable$ = function (tabId, isEnabled) {
    return Rx.Observable.from([{ id: tabId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB }]);
  };
  this.enable = function (tabId, isEnabled) {
    _observer.next({ id: tabId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB });
  };

  this.getSelect$ = function (tabId) {
    return Rx.Observable.from([{ id: tabId, type: _ACTIONS.SELECT_TAB }]);
  };
  this.select = function (tabId) {
    _observer.next({ id: tabId, type: _ACTIONS.SELECT_TAB });
  };
}

module.exports = ng.core.Class(new _ngxTabsService());