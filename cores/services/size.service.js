(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxSizeServiceClass = ngxSizeService;
  ngxBootstrap.ngxCores.ngxSizeService = ng.core.Class(new ngxSizeService());

  function ngxSizeService() {
    var _sizes;

    this.constructor = function () {
    };

    this.setPrefix = function (prefix) {
      this.prefix = prefix ? prefix + '-' : '';
      return this;
    };

    this.getSizeClass = function (size) {
      if (!size) { return ''; }

      size = size.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      size = size.charAt(0).toUpperCase() + size.slice(1);

      var _funcName = 'get' + size + 'SizeClass';
      return this[_funcName] ? this[_funcName]() : this.prefix + size;
    };

    this.getSizes = function () {
      if (!_sizes) {
        _sizes = {};
        var _size;

        for (var prop in this) {
          if (typeof this[prop] == 'function' && /get.+SizeClass/.test(prop)) {
            _size = prop.replace('get', '').replace('SizeClass', '')
                        .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                        .replace(/^_/, '');

            _sizes[_size.toUpperCase()] = _size.toLocaleLowerCase().replace(/_/g, '-');
          }
        }
      }

      return ngxBootstrap.shallowCopy({}, _sizes);
    };

    this.getLargeSizeClass = function () {
      return this.prefix + 'lg';
    };
    this.getSmallSizeClass = function () {
      return this.prefix + 'sm';
    };
    this.getBlockSizeClass = function () {
      return this.prefix + 'block';
    };
  };
})(window.ngxBootstrap);