var ngCore = require('@angular/core/index.js');
var rx = require('rxjs/rx.js');
var ngxCore = require('../../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxBackdropObserver() {
  var _observer;
  var _ACTIONS = {
    SHOW_BACKDROP: 'SHOW_BACKDROP',
    HIDE_BACKDROP: 'HIDE_BACKDROP',
    CLICK_BACKDROP: 'CLICK_BACKDROP'
  };

  this.constructor = [
    ngxCore.animationService,

    function ngxBackdropObserver(ngxAnimationService) {
      ngxUtil.shallowCopy(this, ngxAnimationService);

      this.ngxBackdrop$ = new rx.Observable(function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return ngxUtil.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    if (_observer) { _observer.next(event); }
  };

  this.getShow$ = function () {
    return rx.Observable.from([{ type: _ACTIONS.SHOW_BACKDROP }]);
  };
  this.show = function () {
    this.next({ type: _ACTIONS.SHOW_BACKDROP });
  };

  this.getHide$ = function () {
    return rx.Observable.from([{ type: _ACTIONS.HIDE_BACKDROP }]);
  };
  this.hide = function () {
    this.next({ type: _ACTIONS.HIDE_BACKDROP });
  };

  this.getClick$ = function (isActive) {
    return rx.Observable.from([{ isActive: isActive, type: _ACTIONS.CLICK_BACKDROP }]);
  };
  this.click = function (isActive) {
    this.next({ isActive: isActive, type: _ACTIONS.CLICK_BACKDROP });
  };
}

module.exports = ngCore.Class(new _ngxBackdropObserver());