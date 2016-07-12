var ngxColorService = require('colorService');
var ngxBootstrap = require('ngxBootstrap');

function _ngxBreadcumbService() {
  this.constructor = [
    ngxColorService,

    function ngxBreadcumbService(ngxColorService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxBreadcumbService());