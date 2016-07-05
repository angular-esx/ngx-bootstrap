var ngxStateService = require('stateService');
var ngxBootstrap = require('utils');

function _ngxRadioService() {
  this.constructor = [
    ngxStateService,

    function ngxRadioService(ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxRadioService());