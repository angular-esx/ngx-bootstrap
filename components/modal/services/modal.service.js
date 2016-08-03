import * as ngCore from '@angular/core';
import * as rx from 'rxjs/rx';
import { ngxAnimationService, ngxUtils } from  '../../../cores';

function _ngxModalService() {
  var _observer;
  var _ACTIONS = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL'
  };

  this.constructor = [
    ngxAnimationService,

    function ngxModalService(ngxAnimationService) {
      ngxUtils.shallowCopy(this, ngxAnimationService);

      this.ngxModal$ = new rx.Observable(function (observer) {
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

  this.getShow$ = function (modalId) {
    return rx.Observable.from([{ id: modalId, type: _ACTIONS.SHOW_MODAL }]);
  };
  this.show = function (modalId) {
    this.next({ id: modalId, type: _ACTIONS.SHOW_MODAL });
  };

  this.getHide$ = function (modalId) {
    return rx.Observable.from([{ id: modalId, type: _ACTIONS.HIDE_MODAL }]);
  };
  this.hide = function (modalId) {
    this.next({ id: modalId, type: _ACTIONS.HIDE_MODAL });
  };
}

export var ngxModalService = ngCore.Class(new _ngxModalService());