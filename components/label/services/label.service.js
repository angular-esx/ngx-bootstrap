var ngxColorService = require('./../../../cores/services/render/color.service.js');
var ngxTypeService = require('./../../../cores/services/render/type.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxLabelService() {
  this.constructor = [
    ngxColorService,
    ngxTypeService,

    function (ngxColorService, ngxTypeService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxTypeService);

      this.prefixClass = 'ngx-label';
    }
  ];

  this.isPillTypeClass = function (type) {
    return  this.getTypeClass(type).indexOf(this.getPillTypeClass()) > -1;
  };
  this.getPillTypeClass = function () {
    return  this.prefixClass + '-type-pill';
  };
}

module.exports = ng.core.Class(new _ngxLabelService());