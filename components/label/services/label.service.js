(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLabelServiceClass = ngxLabelService;

  ngxBootstrap.ngxComponents.ngxLabelService = ng.core.Class(new ngxLabelService());

  function ngxLabelService() {
    var _colors;

    this.constructor = function () {
    };

    this.getColorClass = function (color) {
      if (!color) {
        return this.getDefaultColorClass();
      }

      var _funcName = 'get' + color + 'ColorClass';

      return this[_funcName] ? this[_funcName]() : this.getDefaultColorClass();
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

            _colors[_color.toUpperCase()] = _color;
          }
        }
      }

      return ngxBootstrap.shallowCopy({}, _colors);
    };

    this.getDefaultColorClass = function () {
      return 'label-default';
    };
    this.getPrimaryColorClass = function () {
      return 'label-primary';
    };
    this.getInfoColorClass = function () {
      return 'label-info';
    };
    this.getSuccessColorClass = function () {
      return 'label-success';
    };
    this.getWarningColorClass = function () {
      return 'label-warning';
    };
    this.getDangerColorClass = function () {
      return 'label-danger';
    };

  };

})(window.ngxBootstrap);