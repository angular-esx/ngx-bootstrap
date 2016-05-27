var ngxColorService = require('./../../../cores/services/color.service.js');
var ngxStateService = require('./../../../cores/services/state.service.js');
var ngxPositionService = require('./../../../cores/services/position.service.js');
var ngxBootstrap = require('./../../../' + __NGX_BOOTSTRAP__);
ngxBootstrap = require('./../../../' + __NGX_BOOTSTRAP_UTILS__);

function _ngxNavbarService() {
  this.constructor = [
    ngxColorService,
    ngxStateService,
    ngxPositionService,

    function ngxNavbarService(ngxColorService, ngxStateService, ngxPositionService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      ngxBootstrap.shallowCopy(this, ngxPositionService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxNavbarService());