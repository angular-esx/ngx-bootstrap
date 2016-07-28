var ngCore = require('@angular/core/index.js');
var rx = require('rxjs/rx.js');
var ngxCore = require('../../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxTooltipService() {
  var _templates = {},
      _observer;
  var _ACTIONS = {
    ENABLE_TOOLTIP: 'ENABLE_TOOLTIP',
    SHOW_TOOLTIP: 'SHOW_TOOLTIP',
    HIDE_TOOLTIP: 'HIDE_TOOLTIP',
  };

  this.constructor = [
    ngxCore.animationService,

    function ngxTooltipService(ngxAnimationService) {
      ngxUtil.shallowCopy(this, ngxAnimationService);

      this.ngxTooltip$ = new rx.Observable(function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return ngxUtil.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    _observer.next(event);
  };

  this.getEnable$ = function (tooltipId, isEnabled) {
    return rx.Observable.from([{ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP }]);
  };
  this.enable = function (tooltipId, isEnabled) {
    _observer.next({ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP });
  };

  this.getShow$ = function (tooltipId, delay) {
    return rx.Observable.from([{ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay }]);
  };
  this.show = function (tooltipId, delay) {
    _observer.next({ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay });
  };

  this.getHide$ = function (tooltipId) {
    return rx.Observable.from([{ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP }]);
  };
  this.hide = function (tooltipId) {
    _observer.next({ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP });
  };

  this.cacheTemplateRef = function (id, template) {
    if (id && template) { _templates[id] = template; }
    return this;
  };
  this.getTemplateRef = function (id) {
    return _templates[id];
  };
}

module.exports = ngCore.Class(new _ngxTooltipService());