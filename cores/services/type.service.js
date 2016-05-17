var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');

function _ngxTypeService() {
  var _TYPES;

  this.constructor = function ngxTypeService() {};

  this.getTypeClass = function (prefixClass, types) {
    if (!types) { return ''; }

    var _types = types.split(' ');
    var _type, _funcName, _self = this, _typeClasses = [];

    ngxBootstrap.forEach(_types, function (type) {
      _type = type.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _type = _type.charAt(0).toUpperCase() + _type.slice(1);

      _funcName = 'get' + _type + 'TypeClass';
      _typeClasses.push(_self[_funcName] ? _self[_funcName](prefixClass) : prefixClass + '-type-' + _type);
    });

    return _typeClasses.length === 0 ? '' : _typeClasses.join(' ');
  };

  this.getTypes = function () {
    if (!_TYPES) {
      _TYPES = {};
      var _type;

      for (var prop in this) {
        if (typeof this[prop] == 'function' && /get.+TypeClass/.test(prop)) {
          _type = prop.replace('get', '').replace('TypeClass', '')
                      .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                      .replace(/^_/, '');

          _TYPES[_type.toUpperCase()] = _type.toLocaleLowerCase().replace(/_/g, '-');
        }
      }
    }

    return ngxBootstrap.shallowCopy({}, _TYPES);
  };

}

module.exports = ng.core.Class(new _ngxTypeService());