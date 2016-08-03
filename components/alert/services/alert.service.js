import * as ngCore from '@angular/core';
import * as rx from 'rxjs/rx';
import { ngxAnimationService, ngxUtils } from  '../../../cores';

function _ngxAlertService() {
  var _observer;
  var _ACTIONS = {
    SHOW_ALERT: 'SHOW_ALERT',
    DISMISS_ALERT: 'DISMISS_ALERT',
  };

  this.constructor = [
    ngxAnimationService,

    function ngxAlertService(ngxAnimationService) {
      ngxUtils.shallowCopy(this, ngxAnimationService);

      this.ngxAlert$ = new rx.Observable(function (observer) {
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

  this.getShow$ = function (alertId) {
    return rx.Observable.from([{ id: alertId, type: _ACTIONS.SHOW_ALERT }]);
  };
  this.show = function (alertId) {
    this.next({ id: alertId, type: _ACTIONS.SHOW_ALERT });
  };

  this.getDismiss$ = function (alertId) {
    return rx.Observable.from([{ id: alertId, type: _ACTIONS.DISMISS_ALERT }]);
  };
  this.dismiss = function (alertId) {
    this.next({ id: alertId, type: _ACTIONS.DISMISS_ALERT });
  };
}

export var ngxAlertService = ngCore.Class(new _ngxAlertService());