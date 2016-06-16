var ngxColorService = require('./../../../cores/services/color.service.js');
var ngxSizeService = require('./../../../cores/services/size.service.js');
var ngxStateService = require('./../../../cores/services/state.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxLinkButtonService() {
  this.constructor = [
    ngxColorService,
    ngxSizeService,
    ngxStateService,

    function ngxLinkButtonService(ngxColorService, ngxSizeService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxSizeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxLinkButtonService());