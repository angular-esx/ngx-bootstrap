var ngxStateService = require('stateService');
var ngxBootstrap = require('utils');

function _ngxCheckboxService() {
  this.constructor = [
    ngxStateService,

    function ngxCheckboxService(ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxCheckboxService());