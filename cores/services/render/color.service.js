(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxColorServiceClass = ngxColorService;
  ngxBootstrap.ngxCores.ngxColorService = ng.core.Class(new ngxColorService());

  function ngxColorService() {
    var _colors;

    this.constructor = function () {
    };

    this.setPrefix = function (prefix) {
      this.prefix = prefix ? prefix + '-' : '';
      return this;
    };

    this.getColorClass = function (color) {
      if (!color) {
        return this.getDefaultColorClass();
      }
      color = color.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      color = color.charAt(0).toUpperCase() + color.slice(1);

      var _funcName = 'get' + color + 'ColorClass';

      return this[_funcName] ? this[_funcName]() : this.prefix + color;
    };

    this.getColors = function () {
      if (!_colors) {
        _colors = {};
        var _color;

        for (var prop in this) {
          if (typeof this[prop] == 'function' && /get.+ColorClass/.test(prop)) {
            _color = prop.replace('get', '').replace('ColorClass', '')
                          .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                          .replace(/^_/, '');

            _colors[_color.toUpperCase()] = _color.toLocaleLowerCase().replace(/_/g, '-');
          }
        }
      }

      return ngxBootstrap.shallowCopy({}, _colors);
    };

    this.getDefaultColorClass = function () {
      return this.prefix + 'default';
    };
    this.getPrimaryColorClass = function () {
      return this.prefix + 'primary'; 
    };
    this.getSecondaryColorClass = function () {
      return this.prefix + 'secondary';
    };
    this.getInfoColorClass = function () {
      return this.prefix + 'info';
    };
    this.getSuccessColorClass = function () {
      return this.prefix + 'success';
    };
    this.getWarningColorClass = function () {
      return this.prefix + 'warning';
    };
    this.getDangerColorClass = function () {
      return this.prefix + 'danger';
    };
  }

})(window.ngxBootstrap);