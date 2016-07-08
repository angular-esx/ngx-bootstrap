var ngxTypeService = require('typeService');
var ngxStateService = require('stateService');
var ngxPositionService = require('positionService');
var ngxBootstrap = require('utils');

function _ngxDropMenuService() {
  var _observer;
  var _ACTIONS = {
    TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
    TOGGLE_DROPUP: 'TOGGLE_DROPUP'
  };

  this.constructor = [
    ngxTypeService,
    ngxStateService,
    ngxPositionService,

    function ngxDropMenuService(ngxTypeService, ngxStateService, ngxPositionService) {
      ngxBootstrap.shallowCopy(this, ngxTypeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      ngxBootstrap.shallowCopy(this, ngxPositionService);

      this.ngxDropMenu$ = new Rx.Observable(function (observer) {
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

  this.getToggleDropdown$ = function (dropMenuElement) {
    return Rx.Observable.from([{ target: dropMenuElement, type: _ACTIONS.TOGGLE_DROPDOWN }]);
  };
  this.toggleDropdown = function (dropMenuElement) {
    _observer.next({ target: dropMenuElement, type: _ACTIONS.TOGGLE_DROPDOWN });
  };

  this.getToggleDropup$ = function (dropMenuElement) {
    return Rx.Observable.from([{ target: dropMenuElement, type: _ACTIONS.TOGGLE_DROPUP }]);
  };
  this.toggleDropup = function (dropMenuElement) {
    _observer.next({ target: dropMenuElement, type: _ACTIONS.TOGGLE_DROPUP });
  };

  this.isDropdownTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getDropdownTypeClass(prefixClass)) > -1;
  };
  this.getDropdownTypeClass = function (prefixClass) {
    return prefixClass + '-type-dropdown';
  };

  this.isDropupTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getDropupTypeClass(prefixClass)) > -1;
  };
  this.getDropupTypeClass = function (prefixClass) {
    return prefixClass + '-type-dropup';
  };
}

module.exports = ng.core.Class(new _ngxDropMenuService());