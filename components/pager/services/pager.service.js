var ngxTypeService = require('./../../../cores/services/render/type.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxPagerService() {
  this.constructor = [
    ngxTypeService,

    function ngxPagerService(ngxTypeService) {
      ngxBootstrap.shallowCopy(this, ngxTypeService);
    }
  ];

  this.isAlignedTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getAlignedTypeClass(prefixClass)) > -1;
  };
  this.getAlignedTypeClass = function (prefixClass) {
    return prefixClass + '-type-aligned';
  };
}

module.exports = ng.core.Class(new _ngxPagerService());