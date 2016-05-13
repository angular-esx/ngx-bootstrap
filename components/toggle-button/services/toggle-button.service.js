var ngxColorService = require('./../../../cores/services/render/color.service.js');
var ngxSizeService = require('./../../../cores/services/render/size.service.js');
var ngxStateService = require('./../../../cores/services/render/state.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxToggleButtonService() {
  this.constructor = [
    ngxColorService,
    ngxSizeService,
    ngxStateService,

    function ngxToggleButtonService(ngxColorService, ngxSizeService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxSizeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);

      this.prefixClass = 'ngx-toggle-button';
    }
  ];
}

module.exports = ng.core.Class(new _ngxToggleButtonService());