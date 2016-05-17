var ngxStateService = require('./../../../cores/services/state.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxDropMenuItemService() {
  this.constructor = [
    ngxStateService,

    function ngxDropMenuItemService(ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }];
}

module.exports = ng.core.Class(new _ngxDropMenuItemService());
