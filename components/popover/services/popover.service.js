var ngxAnimationService = require('./../../../cores/services/animation.service.js');
var ngxStateService = require('./../../../cores/services/state.service.js');
var ngxPositionService = require('./../../../cores/services/position.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxPopoverService() {
  var _templates = {},
      _observer;
  var _ACTIONS = {
    ENABLE_POPOVER: 'ENABLE_POPOVER',
    TOGGLE_POPOVER: 'TOGGLE_POPOVER'
  };

  this.constructor = [
    ngxAnimationService,
    ngxStateService,
    ngxPositionService,

    function ngxPopoverService(ngxAnimationService, ngxStateService, ngxPositionService) {
      ngxBootstrap.shallowCopy(this, ngxAnimationService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      ngxBootstrap.shallowCopy(this, ngxPositionService);

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

  this.getEnable$ = function (popoverElement, isEnabled) {
    return Rx.Observable.from([{ target: popoverElement, isEnabled: isEnabled, type: _ACTIONS.ENABLE_POPOVER }]);
  };
  this.enable = function (popoverElement, isEnabled) {
    _observer.next({ target: popoverElement, isEnabled: isEnabled, type: _ACTIONS.ENABLE_POPOVER });
  };

  this.getToggle$ = function (popoverElement, delay) {
    return Rx.Observable.from([{ target: popoverElement, type: _ACTIONS.TOGGLE_POPOVER, delay: delay }]);
  };
  this.toggle = function (popoverElement, delay) {
    _observer.next({ target: popoverElement, type: _ACTIONS.TOGGLE_POPOVER, delay: delay });
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