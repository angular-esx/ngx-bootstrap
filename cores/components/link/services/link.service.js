var ngxColorService = require('./../../../services/render/color.service.js');
var ngxSizeService = require('./../../../services/render/size.service.js');
var ngxStateService = require('./../../../services/render/state.service.js');
var ngxBootstrap = require('./../../../ngx-bootstrap.js');
ngxBootstrap = require('./../../../ngx-bootstrap.utils.js');

function _ngxLinkService() {
  this.constructor = [
    ngxColorService,
    ngxSizeService,
    ngxStateService,

    function (ngxColorService, ngxSizeService, ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxSizeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      
      this.prefixClass = '';
    }
  ];
}

module.exports = ng.core.Class(new _ngxLinkService());