var ngxTypeService = require('./../../../cores/services/type.service.js');
var ngxSizeService = require('./../../../cores/services/size.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxGroupService() {
  this.constructor = [
    ngxTypeService,
    ngxSizeService,

    function ngxGroupService(ngxTypeService, ngxSizeService) {
      ngxBootstrap.shallowCopy(this, ngxTypeService);
      ngxBootstrap.shallowCopy(this, ngxSizeService);
    }
  ];

  this.isVerticalTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getVerticalTypeClass(prefixClass)) > -1;
  };
  this.getVerticalTypeClass = function (prefixClass) {
    return prefixClass + '-type-vertical';
  };
}

module.exports = ng.core.Class(new _ngxGroupService());