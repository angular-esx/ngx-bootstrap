import * as ngCore from '@angular/core';
import * as rx from 'rxjs/rx';
import { ngxAnimationService, ngxUtils } from  '../../../cores';

function _ngxCollapseService() {
  var _observer;
  var _ACTIONS = {
    TOGGLE_COLLAPSE: 'TOGGLE_COLLAPSE',
    SHOW_COLLAPSE: 'SHOW_COLLAPSE',
    HIDE_COLLAPSE: 'HIDE_COLLAPSE'
  };

  this.constructor = [
    ngxAnimationService,

    function ngxCollapseService(ngxAnimationService) {
      ngxUtils.shallowCopy(this, ngxAnimationService);

      this.ngxCollapse$ = new rx.Observable(function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return ngxUtils.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    if (_observer) { _observer.next(event); }
  };

  this.getToggle$ = function (collapseId) {
    return rx.Observable.from([{ id: collapseId, type: _ACTIONS.TOGGLE_COLLAPSE }]);
  };
  this.toggle = function (collapseId) {
    this.next({ id: collapseId, type: _ACTIONS.TOGGLE_COLLAPSE });
  };

  this.getShow$ = function (collapseId, groupId) {
    return rx.Observable.from([{ id: collapseId, group: groupId, type: _ACTIONS.SHOW_COLLAPSE }]);
  };
  this.show = function (collapseId, groupId) {
    this.next({ id: collapseId, group: groupId, type: _ACTIONS.SHOW_COLLAPSE });
  };

  this.getHide$ = function (collapseId, groupId) {
    return rx.Observable.from([{ id: collapseId, group: groupId, type: _ACTIONS.HIDE_COLLAPSE }]);
  };
  this.hide = function (collapseId, groupId) {
    this.next({ id: collapseId, group: groupId, type: _ACTIONS.HIDE_COLLAPSE });
  };
}

export var ngxCollapseService = ngCore.Class(new _ngxCollapseService());