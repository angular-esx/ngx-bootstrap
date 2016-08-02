import * as ngCore from '@angular/core';
import * as rx from 'rxjs/rx';
import { ngxAnimationService, ngxUtils } from  '../../cores';

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
      ngxUtils.shallowCopy(this, ngxAnimationService);

      this.ngxPopover$ = new rx.Observable(function (observer) {
        _observer = observer;
      })
     .share();
    }
  ];

  this.getActions = function () {
    return ngxUtils.shallowCopy({}, _ACTIONS);
  };

  this.next = function (event) {
    if (_observer) { _observer.next(event); }
  };

  this.getEnable$ = function (popoverId, isEnabled) {
    return rx.Observable.from([{ id: popoverId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_POPOVER }]);
  };
  this.enable = function (popoverId, isEnabled) {
    this.next({ id: popoverId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_POPOVER });
  };

  this.getToggle$ = function (popoverId, delay) {
    return rx.Observable.from([{ id: popoverId, type: _ACTIONS.TOGGLE_POPOVER, delay: delay }]);
  };
  this.toggle = function (popoverId, delay) {
    this.next({ id: popoverId, type: _ACTIONS.TOGGLE_POPOVER, delay: delay });
  };

  this.cacheTemplateRef = function (id, template) {
    if (id && template) { _templates[id] = template; }
    return this;
  };
  this.getTemplateRef = function (id) {
    return _templates[id];
  };
}

export var ngxPopoverService = ngCore.Class(new _ngxPopoverService());