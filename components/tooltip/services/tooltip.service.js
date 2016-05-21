var ngxAnimationService = require('./../../../cores/services/animation.service.js');
var ngxStateService = require('./../../../cores/services/state.service.js');
var ngxPositionService = require('./../../../cores/services/position.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxTooltipService() {
  var _templates = {};

  this.constructor = [
    ngxAnimationService,
    ngxStateService,
    ngxPositionService,

    function ngxTooltipService(ngxAnimationService, ngxStateService, ngxPositionService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      ngxBootstrap.shallowCopy(this, ngxPositionService);
    }
  ];

  this.cacheTemplateRef = function (id, template) {
    if (id && template) { _templates[id] = template; }
    return this;
  };
  this.getTemplateRef = function (id) {
    return _templates[id];
  };
}

module.exports = ng.core.Class(new _ngxTooltipService());