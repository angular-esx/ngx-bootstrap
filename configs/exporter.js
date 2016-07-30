function _exporter() {
  var _exports = {};

  this.addExports = function (exports) {
    _merge(exports);
    return this;
  };

  this.merge = function () {
    return _exports;
  };

  function _merge (exports) {
    for (var prop in exports) {
      if (!_exports.hasOwnProperty(prop)) {
        _exports[prop] = exports[prop];
      }
    }
  }
}

module.exports = _exporter;