var ngxColorService = require('./../../../cores/services/render/color.service.js');
var ngxTypeService = require('./../../../cores/services/render/type.service.js');
var ngxStateService = require('./../../../cores/services/render/state.service.js');
var ngxPositionService = require('./../../../cores/services/render/position.service.js');
var ngxAnimationService = require('./../../../cores/services/render/animation.service.js');
var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxAlertService() {
  var _positions,
    _ACTIONS = {
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

      this.prefixClass = 'ngx-alert';
      this.alertEmitter = new ng.core.EventEmitter();
    }
  ];

  this.ngOnDestroy = function(){
    if(this.subscription){ this.subscription.unsubscribe(); }
  };

  this.subscribe = function (onNext, onError, onCompleted) {
    this.subscription = this.alertEmitter.subscribe(onNext, onError, onCompleted);
  };
  this.show = function (alertId) {
    this.alertEmitter.next({ id: alertId, type: _ACTIONS.SHOW_ALERT });
  };
  this.dismiss = function (alertId) {
    this.alertEmitter.next({ id: alertId, type: _ACTIONS.DISMISS_ALERT });
  };


  this.getActions = function () {
    return ngxBootstrap.shallowCopy({}, _ACTIONS);
  };

  this.isDismissibleTypeClass = function (type) {
    return this.getTypeClass(type).indexOf(this.getDismissibleTypeClass()) > -1;
  };
  this.getDismissibleTypeClass = function () {
    return this.prefixClass + '-type-dismissible';
  };
  
  this.isFloatTypeClass = function (type) {
    return this.getTypeClass(type).indexOf(this.getFloatTypeClass()) > -1;
  };
  this.getFloatTypeClass = function () {
    return this.prefixClass + '-type-float';
  };
}

module.exports = ng.core.Class(new _ngxAlertService());