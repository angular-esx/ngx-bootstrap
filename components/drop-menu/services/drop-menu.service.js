var ngxTypeService = require('./../../../cores/services/type.service.js');
var ngxStateService = require('./../../../cores/services/state.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxDropMenuService() {
  var _observer;
  var _ACTIONS = {
    TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
    TOGGLE_DROPUP: 'TOGGLE_DROPUP'
  };

  this.constructor = [
    ngxTypeService,
    ngxStateService,

    function ngxDropMenuService(ngxTypeService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxTypeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);

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

  this.getToggle$ = function (dropMenuElement, action) {
    return Rx.Observable.from([{ target: dropMenuElement, type: action }]);
  };
  this.toggle = function (dropMenuElement, action) {
    _observer.next({ target: dropMenuElement, type: action });
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