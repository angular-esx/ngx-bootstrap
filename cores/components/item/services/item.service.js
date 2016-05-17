var ngxColorService = require('./../../../services/render/color.service.js');
var ngxTypeService = require('./../../../services/render/type.service.js');
var ngxSizeService = require('./../../../services/render/size.service.js');
var ngxStateService = require('./../../../services/render/state.service.js');
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