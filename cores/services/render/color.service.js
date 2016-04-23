(function (ngxBootstrap) {
  ngxBootstrap.ngxCores.ngxColorService = ng.core.Class(new _ngxColorService());

  function _ngxColorService() {
    var _COLORS;

    this.constructor = function () {
      this.prefixClass = '';
    };

    this.getColorClass = function (color) {
      if (!color) { return ''; }

      var _color = color.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _color = _color.charAt(0).toUpperCase() + _color.slice(1);

      var _funcName = 'get' + _color + 'ColorClass';

      return this[_funcName] ? this[_funcName]() : this.prefixClass + '-' +_color;
    };

    this.getColors = function () {
      if (!_COLORS) {
        _COLORS = {};
        var _color;

        for (var prop in this) {
          if (typeof this[prop] == 'function' && /get.+ColorClass/.test(prop)) {
            _color = prop.replace('get', '').replace('ColorClass', '')
                          .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                          .replace(/^_/, '');

            _COLORS[_color.toUpperCase()] = _color.toLocaleLowerCase().replace(/_/g, '-');
          }
        }
      }

      return ngxBootstrap.shallowCopy({}, _COLORS);
    };

    this.isDefaultColorClass = function (color) {
      return this.getColorClass(color) === this.getDefaultColorClass();
    };
    this.getDefaultColorClass = function () {
      return this.prefixClass + '-default';
    };

    this.isDefaultOutlineColorClass = function (color) {
      return this.getColorClass(color) === this.getDefaultOutlineColorClass();
    };
    this.getDefaultOutlineColorClass = function () {
      return this.prefixClass + '-default-outline';
    };

    this.isPrimaryColorClass = function (color) {
      return this.getColorClass(color) === this.getPrimaryColorClass();
    };
    this.getPrimaryColorClass = function () {
      return this.prefixClass + '-primary';
    };

    this.isPrimaryOutlineColorClass = function (color) {
      return this.getColorClass(color) === this.getPrimaryOutlineColorClass();
    };
    this.getPrimaryOutlineColorClass = function () {
      return this.prefixClass + '-primary-outline';
    };

    this.isSecondaryColorClass = function (color) {
      return this.getColorClass(color) === this.getSecondaryColorClass();
    };
    this.getSecondaryColorClass = function () {
      return this.prefixClass + '-secondary';
    };

    this.isSecondaryOutlineColorClass = function (color) {
      return this.getColorClass(color) === this.getSecondaryOutlineColorClass();
    };
    this.getSecondaryOutlineColorClass = function () {
      return this.prefixClass + '-secondary-outline';
    };

    this.isInfoColorClass = function (color) {
      return this.getColorClass(color) === this.getInfoColorClass();
    };
    this.getInfoColorClass = function () {
      return this.prefixClass + '-info';
    };

    this.isInfoOutlineColorClass = function (color) {
      return this.getColorClass(color) === this.getInfoOutlineColorClass();
    };
    this.getInfoOutlineColorClass = function () {
      return this.prefixClass + '-info-outline';
    };

    this.isSuccessColorClass = function (color) {
      return this.getColorClass(color) === this.getSuccessColorClass();
    };
    this.getSuccessColorClass = function () {
      return this.prefixClass + '-success';
    };

    this.isSuccessOutlineColorClass = function (color) {
      return this.getColorClass(color) === this.getSuccessOutlineColorClass();
    };
    this.getSuccessOutlineColorClass = function () {
      return this.prefixClass + '-success-outline';
    };

    this.isWarningColorClass = function (color) {
      return this.getColorClass(color) === this.getWarningColorClass();
    };
    this.getWarningColorClass = function () {
      return this.prefixClass + '-warning';
    };

    this.isWarningOutlineColorClass = function (color) {
      return this.getColorClass(color) === this.getWarningOutlineColorClass();
    };
    this.getWarningOutlineColorClass = function () {
      return this.prefixClass + '-warning-outline';
    };

    this.isDangerColorClass = function (color) {
      return this.getColorClass(color) === this.getDangerColorClass();
    };
    this.getDangerColorClass = function () {
      return this.prefixClass + '-danger';
    };

    this.isDangerOutlineColorClass = function (color) {
      return this.getColorClass(color) === this.getDangerOutlineColorClass();
    };
    this.getDangerOutlineColorClass = function () {
      return this.prefixClass + '-danger-outline';
    };

  }

})(window.ngxBootstrap);