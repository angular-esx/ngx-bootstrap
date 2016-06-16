var ngxStateService = require('stateService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxDropMenuItemService() {
  this.constructor = [
    ngxStateService,

    function ngxDropMenuItemService(ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }];
}

module.exports = ng.core.Class(new _ngxDropMenuItemService());
