var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');

function _ngxStateService() {
  var _STATES;

  this.constructor = function ngxStateService() {};

  this.getStateClass = function (prefixClass, states) {
    if (!states) { return ''; }

    var _states = states.split(' ');
    var _state, _funcName, _self = this, _stateClasses = [];

    ngxBootstrap.forEach(_states, function (state) {
      _state = state.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _state = _state.charAt(0).toUpperCase() + _state.slice(1);

      _funcName = 'get' + _state + 'StateClass';
      _stateClasses.push(_self[_funcName] ? _self[_funcName](prefixClass) : prefixClass + '-state-' + _state);
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

  this.isActiveStateClass = function (prefixClass, state) {
    return this.getStateClass(prefixClass, state).indexOf(this.getActiveStateClass(prefixClass)) > -1;
  };
  this.getActiveStateClass = function (prefixClass) {
    return prefixClass + '-state-active';
  };
  
  this.isDisabledStateClass = function (prefixClass, state) {
    return this.getStateClass(prefixClass, state).indexOf(this.getDisabledStateClass(prefixClass)) > -1;
  };
  this.getDisabledStateClass = function (prefixClass) {
    return prefixClass + '-state-disabled';
  };
  
  this.isFocusStateClass = function (prefixClass, state) {
    return this.getStateClass(prefixClass, state).indexOf(this.getFocusStateClass(prefixClass)) > -1;
  };
  this.getFocusStateClass = function (prefixClass) {
    return prefixClass + '-state-focus';
  };
  
  this.isHiddenStateClass = function (prefixClass, state) {
    return this.getStateClass(prefixClass, state).indexOf(this.getHiddenStateClass(prefixClass)) > -1;
  };
  this.getHiddenStateClass = function (prefixClass) {
    return prefixClass + '-state-hidden';
  };
  
}

module.exports = ng.core.Class(new _ngxStateService());