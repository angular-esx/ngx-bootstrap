function _exporter() {
  var _exports = {};

  this.addExports = function (exports) {
    return _merge(exports);
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

    return exporter;
  };
};

module.exports = _exporter;