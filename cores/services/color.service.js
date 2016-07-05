var ngxBootstrap = require('utils');

function _ngxColorService() {
  var _COLORS;

  this.constructor = function ngxColorService() {};

  this.getColorClass = function (prefixClass, colors) {
    if (!colors) { return ''; }

    var _colors = colors.split(' ');
    var _color, _funcName, _self = this, _colorClasses = [];
    
    ngxBootstrap.forEach(_colors, function(color){
      _color = color.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _color = _color.charAt(0).toUpperCase() + _color.slice(1);

      _funcName = 'get' + _color + 'ColorClass';
      _colorClasses.push(_self[_funcName] ? _self[_funcName](prefixClass) : prefixClass + '-color-' + _color);
    });
    
    return _colorClasses.length === 0 ? '' : _colorClasses.join(' ');
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

  this.isOutlineColorClass = function (prefixClass, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getOutlineColorClass(prefixClass)) > -1;
  };
  this.getOutlineColorClass = function (prefixClass) {
    return prefixClass + '-color-outline';
  }; 

  this.isPrimaryColorClass = function (prefixClass, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getPrimaryColorClass(prefixClass)) > -1;
  };
  this.getPrimaryColorClass = function (prefixClass) {
    return prefixClass + '-color-primary';
  };

  this.isSecondaryColorClass = function (prefixClass, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getSecondaryColorClass(prefixClass)) > -1;
  };
  this.getSecondaryColorClass = function (prefixClass) {
    return prefixClass + '-color-secondary';
  };

  this.isInfoColorClass = function (prefixClass, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getInfoColorClass(prefixClass)) > -1;
  };
  this.getInfoColorClass = function (prefixClass) {
    return prefixClass + '-color-info';
  };

  this.isSuccessColorClass = function (prefixClass, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getSuccessColorClass(prefixClass)) > -1;
  };
  this.getSuccessColorClass = function (prefixClass) {
    return prefixClass + '-color-success';
  };

  this.isWarningColorClass = function (prefixClass, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getWarningColorClass(prefixClass)) > -1;
  };
  this.getWarningColorClass = function (prefixClass) {
    return prefixClass + '-color-warning';
  };

  this.isDangerColorClass = function (prefixClass, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getDangerColorClass(prefixClass)) > -1;
  };
  this.getDangerColorClass = function (prefixClass) {
    return prefixClass + '-color-danger';
  };

}

module.exports = ng.core.Class(new _ngxColorService());