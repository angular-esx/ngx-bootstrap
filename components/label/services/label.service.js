var ngxColorService = require('./../../../cores/services/render/color.service.js');
var ngxTypeService = require('./../../../cores/services/render/type.service.js');
var ngxBootstrapUtils = require('./../../../cores/ngx-bootstrap.utils.js');

var ngxLabelService = ng.core.Class(new _ngxLabelService());

function _ngxLabelService() {
  this.constructor = [
    ngxColorService,
    ngxTypeService,

    function (ngxColorService, ngxTypeService) {
      ngxBootstrapUtils.shallowCopy(this, ngxColorService);
      ngxBootstrapUtils.shallowCopy(this, ngxTypeService);

      this.prefixClass = 'ngxLabel';
    }
  ];

  this.getPillTypeClass = function () {
    return  this.prefixClass + '-pill';
  };
}

module.exports = ngxLabelService;