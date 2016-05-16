﻿var ngxStateService = require('./../../../cores/services/render/state.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxRadioService() {
  this.constructor = [
    ngxStateService,

    function ngxRadioService(ngxStateService) {
      ngxBootstrap.shallowCopy(this, ngxStateService);
    }
  ];
}

module.exports = ng.core.Class(new _ngxRadioService());