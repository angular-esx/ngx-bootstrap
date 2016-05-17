var ngxColorService = require('./../../../cores/services/color.service.js');
var ngxTypeService = require('./../../../cores/services/type.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

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