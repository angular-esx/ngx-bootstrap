var ngxAnimationService = require('animationService');
var ngxStateService = require('stateService');
var ngxPositionService = require('positionService');
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
    ngxStateService,
    ngxPositionService,

    function ngxTooltipService(ngxAnimationService, ngxStateService, ngxPositionService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      ngxBootstrap.shallowCopy(this, ngxPositionService);

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

  this.getEnable$ = function (tooltipElement, isEnabled) {
    return Rx.Observable.from([{ target: tooltipElement, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP }]);
  };
  this.enable = function (tooltipElement, isEnabled) {
    _observer.next({ target: tooltipElement, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP });
  };

  this.getShow$ = function (tooltipElement, delay) {
    return Rx.Observable.from([{ target: tooltipElement, type: _ACTIONS.SHOW_TOOLTIP, delay: delay }]);
  };
  this.show = function (tooltipElement, delay) {
    _observer.next({ target: tooltipElement, type: _ACTIONS.SHOW_TOOLTIP, delay: delay });
  };

  this.getHide$ = function (tooltipElement) {
    return Rx.Observable.from([{ target: tooltipElement, type: _ACTIONS.HIDE_TOOLTIP }]);
  };
  this.hide = function (tooltipElement) {
    _observer.next({ target: tooltipElement, type: _ACTIONS.HIDE_TOOLTIP });
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