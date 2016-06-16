var ngxColorService = require('./../../../cores/services/color.service.js');
var ngxTypeService = require('./../../../cores/services/type.service.js');
var ngxStateService = require('./../../../cores/services/state.service.js');
var ngxPositionService = require('./../../../cores/services/position.service.js');
var ngxAnimationService = require('./../../../cores/services/animation.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxAlertService() {
  var _observer;
  var _ACTIONS = {
    SHOW_ALERT: 'SHOW_ALERT',
    DISMISS_ALERT: 'DISMISS_ALERT',
  };

  this.constructor = [
    ngxColorService,
    ngxTypeService,
    ngxStateService,
    ngxPositionService,
    ngxAnimationService,

    function ngxAlertService(ngxColorService, ngxTypeService, ngxStateService, ngxPositionService, ngxAnimationService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
      ngxBootstrap.shallowCopy(this, ngxTypeService);
      ngxBootstrap.shallowCopy(this, ngxStateService);
      ngxBootstrap.shallowCopy(this, ngxPositionService);
      ngxBootstrap.shallowCopy(this, ngxAnimationService);

      this.ngxAlert$ = new Rx.Observable(function (observer) {
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

  this.getShow$ = function (alertElement) {
    return Rx.Observable.from([{ target: alertElement, type: _ACTIONS.SHOW_ALERT }]);
  };
  this.show = function (alertElement) {
    _observer.next({ target: alertElement, type: _ACTIONS.SHOW_ALERT });
  };

  this.getDismiss$ = function (alertElement) {
    return Rx.Observable.from([{ target: alertElement, type: _ACTIONS.DISMISS_ALERT }]);
  };
  this.dismiss = function (alertElement) {
    _observer.next({ target: alertElement, type: _ACTIONS.DISMISS_ALERT });
  };

  this.isDismissibleTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getDismissibleTypeClass(prefixClass)) > -1;
  };
  this.getDismissibleTypeClass = function (prefixClass) {
    return prefixClass + '-type-dismissible';
  };
  
  this.isFloatTypeClass = function (prefixClass, type) {
    return this.getTypeClass(prefixClass, type).indexOf(this.getFloatTypeClass(prefixClass)) > -1;
  };
  this.getFloatTypeClass = function (prefixClass) {
    return prefixClass + '-type-float';
  };
}

module.exports = ng.core.Class(new _ngxAlertService());