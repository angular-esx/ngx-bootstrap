var ngxTypeService = require('./../../../cores/services/render/type.service.js');
var ngxSizeService = require('./../../../cores/services/render/size.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxGroupService() {
  this.constructor = [
    ngxTypeService,
    ngxSizeService,

    function ngxGroupService(ngxTypeService, ngxSizeService) {
      ngxBootstrap.shallowCopy(this, ngxTypeService);
      ngxBootstrap.shallowCopy(this, ngxSizeService);

      this.prefixClass = 'ngx-group';
    }
  ];

  this.isVerticalTypeClass = function (type) {
    return this.getTypeClass(type).indexOf(this.getVerticalTypeClass()) > -1;
  };
  this.getVerticalTypeClass = function () {
    return this.prefixClass + '-type-vertical';
  };
}

module.exports = ng.core.Class(new _ngxGroupService());