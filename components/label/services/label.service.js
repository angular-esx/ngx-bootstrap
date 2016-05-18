var ngxColorService = require('./../../../' + __COLOR_SERVICE__);
var ngxTypeService = require('./../../../' + __TYPE_SERVICE__);
var ngxBootstrap = require('./../../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../../' + __NGX_BOOTSTRAP_UTILS__);

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