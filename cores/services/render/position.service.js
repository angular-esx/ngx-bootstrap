var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');

function _ngxPositionService() {
  var _POSITIONS;

  this.constructor = function ngxPositionService() {
    this.prefixClass = '';
  };

  this.getPositionClass = function (positions) {
    if (!positions) { return ''; }

    var _positions = positions.split(' ');
    var _position, _funcName, _self = this, _positionClasses = [];

    ngxBootstrap.forEach(_positions, function (position) {
      _position = position.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _position = _position.charAt(0).toUpperCase() + _position.slice(1);

      _funcName = 'get' + _position + 'PositionClass';
      _positionClasses.push(_self[_funcName] ? _self[_funcName]() : _self.prefixClass + '-position-' + _position);
    });

    return _positionClasses.length === 0 ? '' : _positionClasses.join(' ');
  };

  this.getPositions = function () {
    if (!_POSITIONS) {
      _POSITIONS = {};
      var _position;

      for (var prop in this) {
        if (typeof this[prop] == 'function' && /get.+PositionClass/.test(prop)) {
          _position = prop.replace('get', '').replace('PositionClass', '')
                      .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                      .replace(/^_/, '');

          _POSITIONS[_position.toUpperCase()] = _position.toLocaleLowerCase().replace(/_/g, '-');
        }
      }
    }

    return ngxBootstrap.shallowCopy({}, _POSITIONS);
  };

  this.isTopPositionClass = function (position) {
    return this.getPositionClass(position).indexOf(this.getTopPositionClass()) > -1;
  };
  this.getTopPositionClass = function () {
    return this.prefixClass + '-position-top';
  };
  
  this.isBottomPositionClass = function (position) {
    return this.getPositionClass(position).indexOf(this.getBottomPositionClass()) > -1;
  };
  this.getBottomPositionClass = function () {
    return this.prefixClass + '-position-bottom';
  };
  
  this.isLeftPositionClass = function (position) {
    return this.getPositionClass(position).indexOf(this.getLeftPositionClass()) > -1;
  };
  this.getLeftPositionClass = function () {
    return this.prefixClass + '-position-left';
  };
  
  this.isRightPositionClass = function (position) {
    return this.getPositionClass(position).indexOf(this.getRightPositionClass()) > -1;
  };
  this.getRightPositionClass = function () {
    return this.prefixClass + '-position-right';
  };
}

module.exports = ng.core.Class(new _ngxPositionService());