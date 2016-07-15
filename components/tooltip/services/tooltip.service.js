var ngxAnimationService = require('animationService');
var ngxBootstrap = require('ngxBootstrap');

function _ngxTooltipService() {
  var _templates = {},
      _observer;
  var _ACTIONS = {
    ENABLE_TOOLTIP: 'ENABLE_TOOLTIP',
    SHOW_TOOLTIP: 'SHOW_TOOLTIP',
    HIDE_TOOLTIP: 'HIDE_TOOLTIP',
  };

  this.constructor = [
    ngxAnimationService,

    function ngxTooltipService(ngxAnimationService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);

      this.ngxTooltip$ = new Rx.Observable(function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return ngxBootstrap.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    _observer.next(event);
  };

  this.getEnable$ = function (tooltipId, isEnabled) {
    return Rx.Observable.from([{ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP }]);
  };
  this.enable = function (tooltipId, isEnabled) {
    _observer.next({ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP });
  };

  this.getShow$ = function (tooltipId, delay) {
    return Rx.Observable.from([{ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay }]);
  };
  this.show = function (tooltipId, delay) {
    _observer.next({ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay });
  };

  this.getHide$ = function (tooltipId) {
    return Rx.Observable.from([{ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP }]);
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

module.exports = ng.core.Class(new _ngxTooltipService());