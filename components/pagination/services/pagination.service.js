var ngxSizeService = require('./../../../cores/services/size.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxPaginationService() {
  this.constructor = [
    ngxSizeService,

    function ngxButtonService(ngxSizeService) {
      ngxBootstrap.shallowCopy(this, ngxSizeService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxPaginationService());