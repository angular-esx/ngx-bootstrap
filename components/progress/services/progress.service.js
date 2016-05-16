var ngxColorService = require('./../../../cores/services/render/color.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxProgressService() {
  this.constructor = [
    ngxColorService,

    function ngxProgressService(ngxColorService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
    }
  ];

  this.isStripedColorClass = function (prefix, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getStripedColorClass(prefixClass)) > -1;
  };
  this.getStripedColorClass = function (prefix) {
    return prefix + '-color-striped';
  };
}

module.exports = ng.core.Class(new _ngxProgressService());