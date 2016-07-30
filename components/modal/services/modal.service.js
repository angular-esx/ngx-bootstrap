var ngCore = require('@angular/core/index.js');
var rx = require('rxjs/rx.js');
var ngxCore = require('../../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxModalService() {
  var _observer;
  var _ACTIONS = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL'
  };

  this.constructor = [
    ngxCore.animationService,

    function ngxModalService(ngxAnimationService) {
      ngxUtil.shallowCopy(this, ngxAnimationService);

      this.ngxModal$ = new rx.Observable(function (observer) {
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

module.exports = ngCore.Class(new _ngxModalService());