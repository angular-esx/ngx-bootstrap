var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');

function _ngxBreakpointService() {
  var _BREAKPOINTS;

  this.constructor = function ngxBreakpointService() { };

  this.getBreakpointClass = function (prefixClass, breakpoints) {
    if (!breakpoints) { return ''; }

    var _breakpoints = breakpoints.split(' ');
    var _breakpoint, _funcName, _self = this, _breakpointClasses = [];

    ngxBootstrap.forEach(_breakpoints, function (breakpoint) {
      _breakpoint = breakpoint.toUpperCase();
      
      _funcName = 'get' + _breakpoint + 'BreakpointClass';
      _breakpointClasses.push(_self[_funcName] ? _self[_funcName](prefixClass) : prefixClass + '-' + _breakpoint);
    });

    return _breakpointClasses.length === 0 ? '' : _breakpointClasses.join(' ');
  };

  this.getBreakpoints = function () {
    if (!_BREAKPOINTS) {
      _BREAKPOINTS = {};
      var _breakpoint;

      for (var prop in this) {
        if (typeof this[prop] == 'function' && /get.+BreakpointClass/.test(prop)) {
          _breakpoint = prop.replace('get', '').replace('BreakpointClass', '');

          _BREAKPOINTS[_breakpoint.toUpperCase()] = _breakpoint.toLocaleLowerCase();
        }
      }
    }

    return ngxBootstrap.shallowCopy({}, _BREAKPOINTS);
  };

  this.isXSBreakpointClass = function (prefixClass, breakpoint) {
    return this.getBreakpointClass(prefixClass, breakpoint).indexOf(this.getXSBreakpointClass(prefixClass)) > -1;
  };
  this.getXSBreakpointClass = function (prefixClass) {
    return prefixClass + '-xs';
  };

  this.isSMBreakpointClass = function (prefixClass, breakpoint) {
    return this.getBreakpointClass(prefixClass, breakpoint).indexOf(this.getSMBreakpointClass(prefixClass)) > -1;
  };
  this.getSMBreakpointClass = function (prefixClass) {
    return prefixClass + '-sm';
  };

  this.isMDBreakpointClass = function (prefixClass, breakpoint) {
    return this.getBreakpointClass(prefixClass, breakpoint).indexOf(this.getMDBreakpointClass(prefixClass)) > -1;
  };
  this.getMDBreakpointClass = function (prefixClass) {
    return prefixClass + '-md';
  };

  this.isLGBreakpointClass = function (prefixClass, breakpoint) {
    return this.getBreakpointClass(prefixClass, breakpoint).indexOf(this.getLGBreakpointClass(prefixClass)) > -1;
  };
  this.getLGBreakpointClass = function (prefixClass) {
    return prefixClass + '-lg';
  };

  this.isXLBreakpointClass = function (prefixClass, breakpoint) {
    return this.getBreakpointClass(prefixClass, breakpoint).indexOf(this.getXLBreakpointClass(prefixClass)) > -1;
  };
  this.getXLBreakpointClass = function (prefixClass) {
    return prefixClass + '-xl';
  };
}

module.exports = ng.core.Class(new _ngxBreakpointService());