function _ngxBackdropObserver() {
  var _observer;
  var _ACTIONS = {
    SHOW_BACKDROP: 'SHOW_BACKDROP',
    HIDE_BACKDROP: 'HIDE_BACKDROP',
    CLICK_BACKDROP: 'CLICK_BACKDROP'
  };

  this.constructor = [
    ngx.core.animationService,

    function ngxBackdropObserver(ngxAnimationService) {
      ngx.shallowCopy(this, ngxAnimationService);

      this.ngxBackdrop$ = new Rx.Observable(function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return ngx.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    _observer.next(event);
  };

  this.getShow$ = function () {
    return Rx.Observable.from([{ type: _ACTIONS.SHOW_BACKDROP }]);
  };
  this.show = function () {
    _observer.next({ type: _ACTIONS.SHOW_BACKDROP });
  };

  this.getHide$ = function () {
    return Rx.Observable.from([{ type: _ACTIONS.HIDE_BACKDROP }]);
  };
  this.hide = function () {
    _observer.next({ type: _ACTIONS.HIDE_BACKDROP });
  };

  this.getClick$ = function (isActive) {
    return Rx.Observable.from([{ isActive: isActive, type: _ACTIONS.CLICK_BACKDROP }]);
  };
  this.click = function (isActive) {
    _observer.next({ isActive: isActive, type: _ACTIONS.CLICK_BACKDROP });
  };
}

module.exports = ng.core.Class(new _ngxBackdropObserver());