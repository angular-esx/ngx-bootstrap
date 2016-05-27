var ngxColorService = require('./../../../cores/services/color.service.js');
var ngxStateService = require('./../../../cores/services/state.service.js');
var ngxBootstrap = require('./../../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../../' + __NGX_BOOTSTRAP_UTILS__);

function _ngxListService() {
  this.constructor = [
    ngxColorService,
    ngxStateService,

    function ngxListService(ngxColorService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxListService());