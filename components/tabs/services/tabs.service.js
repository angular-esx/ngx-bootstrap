var ngCore = require('@angular/core/index.js');
var rx = require('rxjs/rx.js');
var ngxCore = require('../../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxTabsService() {
  var _observer;
  var _ACTIONS = {
    ENABLE_TAB: 'ENABLE_TAB',
    SELECT_TAB: 'SELECT_TAB'
  };

  this.constructor = [
    ngxCore.animationService,

    function ngxTabsService(ngxAnimationService) {
      ngxUtil.shallowCopy(this, ngxAnimationService);

      this.ngxTabs$ = new rx.Observable(function (observer) {
        _observer = observer;
      })
    .share();
    }
  ];

  this.getActions = function () {
    return ngxUtil.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    _observer.next(event);
  };

  this.getEnable$ = function (tabId, isEnabled) {
    return rx.Observable.from([{ id: tabId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB }]);
  };
  this.enable = function (tabId, isEnabled) {
    _observer.next({ id: tabId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB });
  };

  this.getSelect$ = function (tabId) {
    return rx.Observable.from([{ id: tabId, type: _ACTIONS.SELECT_TAB }]);
  };
  this.select = function (tabId) {
    _observer.next({ id: tabId, type: _ACTIONS.SELECT_TAB });
  };
}

module.exports = ngCore.Class(new _ngxTabsService());