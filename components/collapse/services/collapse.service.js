var ngCore = require('@angular/core/index.js');
var rx = require('rxjs/rx.js');
var ngxCore = require('../../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxCollapseService() {
  var _observer;
  var _ACTIONS = {
    TOGGLE_COLLAPSE: 'TOGGLE_COLLAPSE',
    SHOW_COLLAPSE: 'SHOW_COLLAPSE',
    HIDE_COLLAPSE: 'HIDE_COLLAPSE'
  };

  this.constructor = [
    ngxCore.animationService,

    function ngxCollapseService(ngxAnimationService) {
      ngxUtil.shallowCopy(this, ngxAnimationService);

      this.ngxCollapse$ = new rx.Observable(function (observer) {
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

  this.getToggle$ = function (collapseId) {
    return rx.Observable.from([{ id: collapseId, type: _ACTIONS.TOGGLE_COLLAPSE }]);
  };
  this.toggle = function (collapseId) {
    _observer.next({ id: collapseId, type: _ACTIONS.TOGGLE_COLLAPSE });
  };

  this.getShow$ = function (collapseId, groupId) {
    return rx.Observable.from([{ id: collapseId, group: groupId, type: _ACTIONS.SHOW_COLLAPSE }]);
  };
  this.show = function (collapseId, groupId) {
    _observer.next({ id: collapseId, group: groupId, type: _ACTIONS.SHOW_COLLAPSE });
  };

  this.getHide$ = function (collapseId, groupId) {
    return rx.Observable.from([{ id: collapseId, group: groupId, type: _ACTIONS.HIDE_COLLAPSE }]);
  };
  this.hide = function (collapseId, groupId) {
    _observer.next({ id: collapseId, group: groupId, type: _ACTIONS.HIDE_COLLAPSE });
  };
}

module.exports = ngCore.Class(new _ngxCollapseService());