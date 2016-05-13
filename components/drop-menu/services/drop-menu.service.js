var ngxTypeService = require('./../../../cores/services/render/type.service.js');
var ngxStateService = require('./../../../cores/services/render/state.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxDropMenuService() {
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

      this.prefixClass = 'ngx-drop-menu';
      this.dropMenuEmitter = new ng.core.EventEmitter();
    }
  ];

  this.getActions = function () {
    return ngxBootstrap.shallowCopy({}, _ACTIONS);
  };

  this.isDropdownTypeClass = function (type) {
    return this.getTypeClass(type).indexOf(this.getDropdownTypeClass()) > -1;
  };
  this.getDropdownTypeClass = function () {
    return this.prefixClass + '-type-dropdown';
  };

  this.isDropupTypeClass = function (type) {
    return this.getTypeClass(type).indexOf(this.getDropupTypeClass()) > -1;
  };
  this.getDropupTypeClass = function () {
    return this.prefixClass + '-type-dropup';
  };

  this.subscribe = function (onNext, onError, onCompleted) {
    this.dropMenuEmitter.subscribe(onNext, onError, onCompleted);
  };

  this.toggle = function (dropMenuId, action) {
    this.dropMenuEmitter.next({ id: dropMenuId, action: action });
  };
}

module.exports = ng.core.Class(new _ngxDropMenuService());