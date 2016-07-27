﻿function _ngxTooltipService() {
  var _templates = {},
      _observer;
  var _ACTIONS = {
    ENABLE_TOOLTIP: 'ENABLE_TOOLTIP',
    SHOW_TOOLTIP: 'SHOW_TOOLTIP',
    HIDE_TOOLTIP: 'HIDE_TOOLTIP',
  };

  this.constructor = [
    ngx.core.animationService,

    function ngxTooltipService(ngxAnimationService) {
      ngx.shallowCopy(this, ngxAnimationService);

      this.ngxTooltip$ = new Rx.Observable(function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return ngx.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    if (_observer) { _observer.next(event); }
  };

  this.getEnable$ = function (tooltipId, isEnabled) {
    return Rx.Observable.from([{ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP }]);
  };
  this.enable = function (tooltipId, isEnabled) {
    this.next({ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP });
  };

  this.getShow$ = function (tooltipId, delay) {
    return Rx.Observable.from([{ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay }]);
  };
  this.show = function (tooltipId, delay) {
    this.next({ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay });
  };

  this.getHide$ = function (tooltipId) {
    return Rx.Observable.from([{ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP }]);
  };
  this.hide = function (tooltipId) {
    this.next({ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP });
  };

  this.cacheTemplateRef = function (id, template) {
    if (id && template) { _templates[id] = template; }
    return this;
  };
  this.getTemplateRef = function (id) {
    return _templates[id];
  };
}

module.exports = ng.core.Class(new _ngxTooltipService());