(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxTypeServiceClass = ngxTypeService;
  ngxBootstrap.ngxCores.ngxTypeService = ng.core.Class(new ngxTypeService());

  function ngxTypeService() {
    var _types;

    this.constructor = function () {
    };

    this.setPrefix = function (prefix) {
      this.prefix = prefix ? prefix + '-' : '';
      return this;
    };

    this.getTypeClass = function (type) {
      if (!type) { return ''; }

      type = type.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      type = type.charAt(0).toUpperCase() + type.slice(1);

      var _funcName = 'get' + type + 'TypeClass';
      return this[_funcName] ? this[_funcName]() : this.prefix + type;
    };

    this.getTypes = function () {
      if (!_types) {
        _types = {};
        var _type;

        for (var prop in this) {
          if (typeof this[prop] == 'function' && /get.+TypeClass/.test(prop)) {
            _type = prop.replace('get', '').replace('TypeClass', '')
                        .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                        .replace(/^_/, '');

            _types[_type.toUpperCase()] = _type.toLocaleLowerCase().replace(/_/g, '-');
          }
        }
      }

      return ngxBootstrap.shallowCopy({}, _types);
    };

    this.getOutlineTypeClass = function () {
      return 'outline';
    };
  }
})(window.ngxBootstrap);