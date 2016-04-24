var ngxBootstrapUtils = require('./../../../ngx-bootstrap.utils.js');
var ngxStateService = require('./../../services/render/state.service.js');

var ngxLinkService = ng.core.Class(new _ngxLinkService());

function _ngxLinkService() {
  this.constructor = [
    ngxStateService,

    function (ngxStateService) {
      ngxBootstrapUtils.shallowCopy(this, ngxStateService);

      this.setPrefix('');
    }
  ];

  this.isDisabledState = function (state) {
    return this.getStateClass(state) === this.getStates().DISABLED;
  };

  this.isActiveState = function (state) {
    return this.getStateClass(state) === this.getStates().ACTIVE;
  };
}

module.exports = ngxLinkService;