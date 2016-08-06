var ngxAnimationService = require('animationService');
var ngxBootstrap = require('ngxBootstrap');

function _ngxAlertService() {
  var _observer;
  var _ACTIONS = {
    SHOW_ALERT: 'SHOW_ALERT',
    DISMISS_ALERT: 'DISMISS_ALERT',
  };

  this.constructor = [
    ngxAnimationService,

    function ngxAlertService(ngxAnimationService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);

      this.ngxAlert$ = new Rx.Observable(function (observer) {
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

  this.getShow$ = function (alertId) {
    return Rx.Observable.from([{ id: alertId, type: _ACTIONS.SHOW_ALERT }]);
  };
  this.show = function (alertId) {
    _observer.next({ id: alertId, type: _ACTIONS.SHOW_ALERT });
  };

  this.getDismiss$ = function (alertId) {
    return Rx.Observable.from([{ id: alertId, type: _ACTIONS.DISMISS_ALERT }]);
  };
  this.dismiss = function (alertId) {
    _observer.next({ id: alertId, type: _ACTIONS.DISMISS_ALERT });
  };
}

module.exports = ng.core.Class(new _ngxAlertService());