var ngxColorService = require('./../../../services/color.service.js');
var ngxTypeService = require('./../../../services/type.service.js');
var ngxSizeService = require('./../../../services/size.service.js');
var ngxStateService = require('./../../../services/state.service.js');
var ngxBootstrap = require('./../../../ngx-bootstrap.js');
ngxBootstrap = require('./../../../ngx-bootstrap.utils.js');

function _ngxItemService() {
  this.constructor = [
    ngxColorService,
    ngxTypeService,
    ngxSizeService,
    ngxStateService,

    function ngxItemService(ngxColorService, ngxTypeService, ngxSizeService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxTypeService);
      ngxBootstrap.shallowCopy(this, ngxSizeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxItemService());