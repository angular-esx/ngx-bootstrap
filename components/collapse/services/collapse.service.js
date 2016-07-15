var ngxAnimationService = require('animationService');
var ngxBootstrap = require('ngxBootstrap');

function _ngxCollapseService() {
  var _observer;
  var _ACTIONS = {
    TOGGLE_COLLAPSE: 'TOGGLE_COLLAPSE',
    SHOW_COLLAPSE: 'SHOW_COLLAPSE',
    HIDE_COLLAPSE: 'HIDE_COLLAPSE'
  };

  this.constructor = [
    ngxAnimationService,

    function ngxCollapseService(ngxAnimationService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);

      this.ngxCollapse$ = new Rx.Observable(function (observer) {
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

  this.getToggle$ = function (collapseId) {
    return Rx.Observable.from([{ id: collapseId, type: _ACTIONS.TOGGLE_COLLAPSE }]);
  };
  this.toggle = function (collapseId) {
    _observer.next({ id: collapseId, type: _ACTIONS.TOGGLE_COLLAPSE });
  };

  this.getShow$ = function (collapseId, groupId) {
    return Rx.Observable.from([{ id: collapseId, group: groupId, type: _ACTIONS.SHOW_COLLAPSE }]);
  };
  this.show = function (collapseId, groupId) {
    _observer.next({ id: collapseId, group: groupId, type: _ACTIONS.SHOW_COLLAPSE });
  };

  this.getHide$ = function (collapseId, groupId) {
    return Rx.Observable.from([{ id: collapseId, group: groupId, type: _ACTIONS.HIDE_COLLAPSE }]);
  };
  this.hide = function (collapseId, groupId) {
    _observer.next({ id: collapseId, group: groupId, type: _ACTIONS.HIDE_COLLAPSE });
  };
}

module.exports = ng.core.Class(new _ngxCollapseService());