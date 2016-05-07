var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');

function _ngxStateService() {
  var _STATES;

  this.constructor = function () {
    this.prefixClass = '';
  };

  this.getStateClass = function (states) {
    if (!states) { return ''; }

    var _states = states.split(' ');
    var _state, _funcName, _self = this, _stateClasses = [];

    ngxBootstrap.forEach(_states, function (state) {
      _state = state.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _state = _state.charAt(0).toUpperCase() + _state.slice(1);

      _funcName = 'get' + _state + 'StateClass';
      _stateClasses.push(_self[_funcName] ? _self[_funcName]() : _self.prefixClass + '-state-' + _state);
    });

    return _stateClasses.length === 0 ? '' : _stateClasses.join(' ');
  };

  this.getStates = function () {
    if (!_STATES) {
      _STATES = {};
      var _state;

      for (var prop in this) {
        if (typeof this[prop] == 'function' && /get.+StateClass/.test(prop)) {
          _state = prop.replace('get', '').replace('StateClass', '')
                      .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                      .replace(/^_/, '');

          _STATES[_state.toUpperCase()] = _state.toLocaleLowerCase().replace(/_/g, '-');
        }
      }
    }

    return ngxBootstrap.shallowCopy({}, _STATES);
  };

  this.isActiveStateClass = function (state) {
    return this.getStateClass(state).indexOf(this.getActiveStateClass()) > -1;
  };
  this.getActiveStateClass = function () {
    return this.prefixClass + '-state-active';
  };
  
  this.isDisabledStateClass = function (state) {
    return this.getStateClass(state).indexOf(this.getDisabledStateClass()) > -1;
  };
  this.getDisabledStateClass = function () {
    return this.prefixClass + '-state-disabled';
  };
  
  this.isHiddenStateClass = function (state) {
    return this.getStateClass(state).indexOf(this.getHiddenStateClass()) > -1;
  };
  this.getHiddenStateClass = function () {
    return this.prefixClass + '-state-hidden';
  };
  
}

module.exports = ng.core.Class(new _ngxStateService());