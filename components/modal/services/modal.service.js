function _ngxModalService() {
  var _observer;
  var _ACTIONS = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL'
  };

  this.constructor = [
    ngx.core.animationService,

    function ngxModalService(ngxAnimationService) {
      ngx.shallowCopy(this, ngxAnimationService);

      this.ngxModal$ = new Rx.Observable(function (observer) {
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

  this.getShow$ = function (modalId) {
    return Rx.Observable.from([{ id: modalId, type: _ACTIONS.SHOW_MODAL }]);
  };
  this.show = function (modalId) {
    this.next({ id: modalId, type: _ACTIONS.SHOW_MODAL });
  };

  this.getHide$ = function (modalId) {
    return Rx.Observable.from([{ id: modalId, type: _ACTIONS.HIDE_MODAL }]);
  };
  this.hide = function (modalId) {
    this.next({ id: modalId, type: _ACTIONS.HIDE_MODAL });
  };
}

module.exports = ng.core.Class(new _ngxModalService());