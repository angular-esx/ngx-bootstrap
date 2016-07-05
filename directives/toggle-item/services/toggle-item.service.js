var ngxStateService = require('stateService');
var ngxBootstrap = require('utils');

function _ngxToggleItemService() {
  this.constructor = [
    ngxStateService,

    function ngxToggleItemService(ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxToggleItemService());