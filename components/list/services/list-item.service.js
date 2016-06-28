var ngxColorService = require('colorService');
var ngxStateService = require('stateService');
var ngxTypeService = require('typeService');
var ngxPositionService = require('positionService');
var ngxBootstrap = require('utils');

function _ngxListItemService() {
  this.constructor = [
    ngxColorService,
    ngxStateService,
    ngxTypeService,
    ngxPositionService,

    function ngxListItemService(ngxColorService, ngxStateService, ngxTypeService, ngxPositionService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      ngxBootstrap.shallowCopy(this, ngxTypeService);
      ngxBootstrap.shallowCopy(this, ngxPositionService);
    }
  ];

  this.isLeftTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getLeftTypeClass(prefixClass)) > -1;
  };
  this.getLeftTypeClass = function (prefixClass) {
    return prefixClass + '-type-left';
  };

  this.isCenterTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getCenterTypeClass(prefixClass)) > -1;
  };
  this.getCenterTypeClass = function (prefixClass) {
    return prefixClass + '-type-center';
  };

  this.isRightTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getRightTypeClass(prefixClass)) > -1;
  };
  this.getRightTypeClass = function (prefixClass) {
    return prefixClass + '-type-right';
  };
}

module.exports = ng.core.Class(new _ngxListItemService());