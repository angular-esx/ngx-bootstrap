var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
var ngxColorService = require('./../../../cores/services/render/color.service.js');
var ngxSizeService = require('./../../../cores/services/render/size.service.js');
var ngxStateService = require('./../../services/render/state.service.js');

function _ngxItemService() {
  this.constructor = [
    ngxColorService,
    ngxSizeService,
    ngxStateService,

    function (ngxColorService, ngxSizeService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxSizeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxItemService());