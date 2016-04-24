var ngxBootstrapUtils = require('./../../../cores/ngx-bootstrap.utils.js');

// ngxBootstrap.ngxClass.ngxStateServiceClass = ngxStateService;
var ngxStateService = ng.core.Class(new _ngxStateService());

function _ngxStateService() {
  var _states;

  this.constructor = function () {
  };

  this.setPrefix = function (prefix) {
    this.prefix = prefix ? prefix + '-' : '';
    return this;
  };

  this.getStateClass = function (state) {
    if (!state) { return ''; }

    state = state.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
    state = state.charAt(0).toUpperCase() + state.slice(1);

    var _funcName = 'get' + state + 'StateClass';
    return this[_funcName] ? this[_funcName]() : this.prefix + state;
  };

  this.getStates = function () {
    if (!_states) {
      _states = {};
      var _state;

      for (var prop in this) {
        if (typeof this[prop] == 'function' && /get.+StateClass/.test(prop)) {
          _state = prop.replace('get', '').replace('StateClass', '')
                      .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                      .replace(/^_/, '');

          _states[_state.toUpperCase()] = _state.toLocaleLowerCase().replace(/_/g, '-');
        }
      }
    }

    return ngxBootstrapUtils.shallowCopy({}, _states);
  };

  this.getActiveStateClass = function () {
    return 'active';
  };
  this.getDisabledStateClass = function () {
    return 'disabled';
  };
}

module.exports = ngxStateService;