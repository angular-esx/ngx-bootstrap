import * as ngCore from '@angular/core';
import * as rx from 'rxjs/rx';
import ngxUtils from  '../../cores';

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
    return ngxUtils.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    if (_observer) { _observer.next(event); }
  };

  this.getToggleDropdown$ = function (dropMenuId) {
    return rx.Observable.from([{ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPDOWN }]);
  };
  this.toggleDropdown = function (dropMenuId) {
    this.next({ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPDOWN });
  };

  this.getToggleDropup$ = function (dropMenuId) {
    return rx.Observable.from([{ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPUP }]);
  };
  this.toggleDropup = function (dropMenuId) {
    this.next({ id: dropMenuId, type: _ACTIONS.TOGGLE_DROPUP });
  };
}

export var ngxDropMenuService = ngCore.Class(new _ngxDropMenuService());