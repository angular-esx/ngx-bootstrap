var ngxColorService = require('colorService');
var ngxStateService = require('stateService');
var ngxBootstrap = require('utils');

function _ngxListItemService() {
  this.constructor = [
    ngxColorService,
    ngxStateService,

    function ngxListItemService(ngxColorService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxListItemService());