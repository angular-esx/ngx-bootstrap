function _ngxTabsService() {
  var _observer;
  var _ACTIONS = {
    ENABLE_TAB: 'ENABLE_TAB',
    SELECT_TAB: 'SELECT_TAB'
  };

  this.constructor = function ngxTabsService() {
    this.ngxTabs$ = new Rx.Observable(function (observer) {
      _observer = observer;
    })
  .share();
  };

  this.getActions = function () {
    return ngx.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    if (_observer) { _observer.next(event); }
  };

  this.getEnable$ = function (tabId, isEnabled) {
    return Rx.Observable.from([{ id: tabId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB }]);
  };
  this.enable = function (tabId, isEnabled) {
    this.next({ id: tabId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB });
  };

  this.getSelect$ = function (tabId) {
    return Rx.Observable.from([{ id: tabId, type: _ACTIONS.SELECT_TAB }]);
  };
  this.select = function (tabId) {
    this.next({ id: tabId, type: _ACTIONS.SELECT_TAB });
  };
}

module.exports = ng.core.Class(new _ngxTabsService());