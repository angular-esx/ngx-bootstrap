var ngxColorService = require('colorService');
var ngxSizeService = require('sizeService');
var ngxStateService = require('stateService');
var ngxBootstrap = require('ngxBootstrap');

function _ngxLinkService() {
  this.constructor = [
    ngxColorService,
    ngxSizeService,
    ngxStateService,

    function ngxLinkService(ngxColorService, ngxSizeService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxSizeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxLinkService());