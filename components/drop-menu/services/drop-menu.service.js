var ngCore = require('@angular/core/index.js');
var rx = require('rxjs/rx.js');
var ngxCore = require('../../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxDropMenuService() {
  var _observer;
  var _ACTIONS = {
    TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
    TOGGLE_DROPUP: 'TOGGLE_DROPUP'
  };

  this.constructor = function ngxDropMenuService() {
    this.ngxDropMenu$ = new rx.Observable(function (observer) {
      _observer = observer;
    })
    .share();
  };

  this.getActions = function () {
    return ngxUtil.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    _observer.next(event);
  };

  this.getToggleDropdown$ = function (dropMenuId) {
    return rx.Observable.from([{ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPDOWN }]);
  };
  this.toggleDropdown = function (dropMenuId) {
    _observer.next({ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPDOWN });
  };

  this.getToggleDropup$ = function (dropMenuId) {
    return rx.Observable.from([{ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPUP }]);
  };
  this.toggleDropup = function (dropMenuId) {
    _observer.next({ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPUP });
  };
}

module.exports = ngCore.Class(new _ngxDropMenuService());