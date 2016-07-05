var ngxAnimationService = require('animationService');
var ngxTypeService = require('typeService');
var ngxStateService = require('stateService');
var ngxBootstrap = require('utils');

function _ngxTabsService() {
  var _observer;
  var _ACTIONS = {
    ENABLE_TAB: 'ENABLE_TAB',
    SELECT_TAB: 'SELECT_TAB'
  };

  this.constructor = [
    ngxAnimationService,
    ngxTypeService,
    ngxStateService,

    function ngxTabsService(ngxAnimationService, ngxTypeService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);
      ngxBootstrap.shallowCopy(this, ngxTypeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);

      this.ngxTabs$ = new Rx.Observable(function (observer) {
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

  this.getEnable$ = function (tabElement, isEnabled) {
    return Rx.Observable.from([{ target: tabElement, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB }]);
  };
  this.enable = function (tabElement, isEnabled) {
    _observer.next({ target: tabElement, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB });
  };

  this.getSelect$ = function (tabElement) {
    return Rx.Observable.from([{ target: tabElement, type: _ACTIONS.SELECT_TAB }]);
  };
  this.select = function (tabElement) {
    _observer.next({ target: tabElement, type: _ACTIONS.SELECT_TAB });
  };

  this.isPillTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getPillTypeClass(prefixClass)) > -1;
  };
  this.getPillTypeClass = function (prefixClass) {
    return prefixClass + '-type-pill';
  };
}

module.exports = ng.core.Class(new _ngxTabsService());