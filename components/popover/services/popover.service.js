var ngxAnimationService = require('animationService');
var ngxBootstrap = require('ngxBootstrap');

function _ngxPopoverService() {
  var _templates = {},
      _observer;
  var _ACTIONS = {
    ENABLE_POPOVER: 'ENABLE_POPOVER',
    TOGGLE_POPOVER: 'TOGGLE_POPOVER'
  };

  this.constructor = [
    ngxAnimationService,

    function ngxPopoverService(ngxAnimationService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);

      this.ngxPopover$ = new Rx.Observable(function (observer) {
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

  this.getEnable$ = function (popoverId, isEnabled) {
    return Rx.Observable.from([{ id: popoverId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_POPOVER }]);
  };
  this.enable = function (popoverId, isEnabled) {
    _observer.next({ id: popoverId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_POPOVER });
  };

  this.getToggle$ = function (popoverId, delay) {
    return Rx.Observable.from([{ id: popoverId, type: _ACTIONS.TOGGLE_POPOVER, delay: delay }]);
  };
  this.toggle = function (popoverId, delay) {
    _observer.next({ id: popoverId, type: _ACTIONS.TOGGLE_POPOVER, delay: delay });
  };

  this.cacheTemplateRef = function (id, template) {
    if (id && template) { _templates[id] = template; }
    return this;
  };
  this.getTemplateRef = function (id) {
    return _templates[id];
  };
}

module.exports = ng.core.Class(new _ngxPopoverService());