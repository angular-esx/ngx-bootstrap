﻿function _ngxDropMenuService() {
  var _observer;
  var _ACTIONS = {
    TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
    TOGGLE_DROPUP: 'TOGGLE_DROPUP'
  };

  this.constructor = function ngxDropMenuService() {
    this.ngxDropMenu$ = new Rx.Observable(function (observer) {
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

  this.getToggleDropdown$ = function (dropMenuId) {
    return Rx.Observable.from([{ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPDOWN }]);
  };
  this.toggleDropdown = function (dropMenuId) {
    this.next({ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPDOWN });
  };

  this.getToggleDropup$ = function (dropMenuId) {
    return Rx.Observable.from([{ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPUP }]);
  };
  this.toggleDropup = function (dropMenuId) {
    this.next({ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPUP });
  };
}

module.exports = ng.core.Class(new _ngxDropMenuService());