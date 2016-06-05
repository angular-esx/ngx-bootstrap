var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../cores/ngx-bootstrap.utils.js');

function _ngxRadioGroupService() {
  var _ACTIONS = {
    CHANGE_VALUE: 'CHANGE_VALUE'
  };

  this.constructor = function ngxRadioGroupService() {
    this.radioGroupEmitter = new ng.core.EventEmitter();
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }
  };

  this.subscribe = function (onNext, onError, onCompleted) {
    this.subscription = this.radioGroupEmitter.subscribe(onNext, onError, onCompleted);
  };

  this.change = function (radioGroupId) {
    this.radioGroupEmitter.next({ id: radioGroupId, type: _ACTIONS.CHANGE_VALUE });
  };

  this.getActions = function () {
    return ngxBootstrap.shallowCopy({}, _ACTIONS);
  };
}

module.exports = ng.core.Class(new _ngxRadioGroupService());