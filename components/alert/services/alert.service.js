function _ngxAlertService() {
  var _observer;
  var _ACTIONS = {
    SHOW_ALERT: 'SHOW_ALERT',
    DISMISS_ALERT: 'DISMISS_ALERT',
  };

  this.constructor = [
    ngx.core.animationService,

    function ngxAlertService(ngxAnimationService) {
      ngx.shallowCopy(this, ngxAnimationService);

      this.ngxAlert$ = new Rx.Observable(function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return ngx.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    if (_observer) { _observer.next(event); }
  };

  this.getShow$ = function (alertId) {
    return Rx.Observable.from([{ id: alertId, type: _ACTIONS.SHOW_ALERT }]);
  };
  this.show = function (alertId) {
    this.next({ id: alertId, type: _ACTIONS.SHOW_ALERT });
  };

  this.getDismiss$ = function (alertId) {
    return Rx.Observable.from([{ id: alertId, type: _ACTIONS.DISMISS_ALERT }]);
  };
  this.dismiss = function (alertId) {
    this.next({ id: alertId, type: _ACTIONS.DISMISS_ALERT });
  };
}

module.exports = ng.core.Class(new _ngxAlertService());