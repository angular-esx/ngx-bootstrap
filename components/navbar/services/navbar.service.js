var ngxColorService = require('colorService');
var ngxStateService = require('stateService');
var ngxPositionService = require('positionService');
var ngxBootstrap = require('utils');

function _ngxNavbarService() {
  this.constructor = [
    ngxColorService,
    ngxStateService,
    ngxPositionService,

    function ngxNavbarService(ngxColorService, ngxStateService, ngxPositionService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      ngxBootstrap.shallowCopy(this, ngxPositionService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxNavbarService());