var ngxBreakpointService = require('breakpointService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxHideService() {
  this.constructor = [
    ngxBreakpointService,

    function ngxHideService(ngxBreakpointService) {
      ngxBootstrap.shallowCopy(this, ngxBreakpointService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxHideService());