var ngxBootstrapUtils = require('./../../../cores/ngx-bootstrap.utils.js');

var ngxTypeService = ng.core.Class(new _ngxTypeService());

function _ngxTypeService() {
  var _TYPES;

  this.constructor = function () {
    this.prefixClass = '';
  };

  this.getTypeClass = function (type) {
    if (!type) { return ''; }

    var _type = type.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
    _type = _type.charAt(0).toUpperCase() + _type.slice(1);

    var _funcName = 'get' + _type + 'TypeClass';
    return this[_funcName] ? this[_funcName]() : this.prefixClass + '-' +_type;
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

    return ngxBootstrapUtils.shallowCopy({}, _TYPES);
  };

}

module.exports = ngxTypeService;