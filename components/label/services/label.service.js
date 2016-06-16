var ngxColorService = require('colorService');
var ngxTypeService = require('typeService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxLabelService() {
  this.constructor = [
    ngxColorService,
    ngxTypeService,

    function ngxLabelService(ngxColorService, ngxTypeService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxTypeService);
    }
  ];

  this.isPillTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getPillTypeClass(prefixClass)) > -1;
  };
  this.getPillTypeClass = function (prefixClass) {
    return  prefixClass + '-type-pill';
  };
}

module.exports = ng.core.Class(new _ngxLabelService());