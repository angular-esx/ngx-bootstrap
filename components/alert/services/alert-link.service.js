var ngxColorService = require('./../../../cores/services/render/color.service.js');
var ngxStateService = require('./../../../cores/services/render/state.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxAlertLinkService() {
  this.constructor = [
    ngxColorService,
    ngxStateService,

    function (ngxColorService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxStateService);

      this.prefixClass = 'ngx-alert-link';
    }
  ];
}

module.exports = ng.core.Class(new _ngxAlertLinkService());