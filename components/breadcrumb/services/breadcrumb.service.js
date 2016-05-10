var ngxColorService = require('./../../../cores/services/render/color.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxBreadcumbService() {
  this.constructor = [
    ngxColorService,

    function (ngxColorService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      
      this.prefixClass = 'ngx-breadcrumb';
    }
  ];
}

module.exports = ng.core.Class(new _ngxBreadcumbService());