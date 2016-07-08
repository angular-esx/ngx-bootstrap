var ngxSizeService = require('sizeService');
var ngxBootstrap = require('utils');

function _ngxPaginationService() {
  this.constructor = [
    ngxSizeService,

    function ngxButtonService(ngxSizeService) {
      ngxBootstrap.shallowCopy(this, ngxSizeService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxPaginationService());