var ngCore = require('@angular/core/index.js');
var rx = require('rxjs/rx.js');
var ngxCore = require('../../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxAlertService() {
  var _observer;
  var _ACTIONS = {
    SHOW_ALERT: 'SHOW_ALERT',
    DISMISS_ALERT: 'DISMISS_ALERT',
  };

  this.constructor = [
    ngxCore.animationService,

    function ngxAlertService(ngxAnimationService) {
      ngxUtil.shallowCopy(this, ngxAnimationService);

      this.ngxAlert$ = new rx.Observable(function (observer) {
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

  this.getShow$ = function (alertId) {
    return rx.Observable.from([{ id: alertId, type: _ACTIONS.SHOW_ALERT }]);
  };
  this.show = function (alertId) {
    _observer.next({ id: alertId, type: _ACTIONS.SHOW_ALERT });
  };

  this.getDismiss$ = function (alertId) {
    return rx.Observable.from([{ id: alertId, type: _ACTIONS.DISMISS_ALERT }]);
  };
  this.dismiss = function (alertId) {
    _observer.next({ id: alertId, type: _ACTIONS.DISMISS_ALERT });
  };
}

module.exports = ngCore.Class(new _ngxAlertService());