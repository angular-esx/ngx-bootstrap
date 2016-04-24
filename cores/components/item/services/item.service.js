var ngxBootstrapUtils = require('./../../../ngx-bootstrap.utils.js');
var ngxStateService = require('./../../services/render/state.service.js');

var ngxItemService = ng.core.Class(new _ngxItemService());

function _ngxItemService() {
  this.constructor = [
    ngxBootstrap.ngxCores.ngxStateService,

    function (ngxStateService) {
      ngxBootstrapUtils.shallowCopy(this, ngxStateService);

      this.setPrefix('');
    }
  ];
}

module.exports = ngxItemService;