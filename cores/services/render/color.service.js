var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');

function _ngxColorService() {
  var _COLORS;

  this.constructor = function () {
    this.prefixClass = '';
  };

  this.getColorClass = function (colors) {
    if (!colors) { return ''; }

    var _colors = colors.split(' ');
    var _color, _funcName, _self = this, _colorClasses = [];
    
    ngxBootstrap.forEach(_colors, function(color){
      _color = color.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _color = _color.charAt(0).toUpperCase() + _color.slice(1);

      _funcName = 'get' + _color + 'ColorClass';
      _colorClasses.push(_self[_funcName] ? _self[_funcName]() : _self.prefixClass + '-color-' +_color);
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

  this.isOutlineColorClass = function (color) {
    return this.getColorClass(color).indexOf(this.getOutlineColorClass()) > -1;
  };
  this.getOutlineColorClass = function(){
    return this.prefixClass + '-color-outline';
  }; 

  this.isDefaultColorClass = function (color) {
    return this.getColorClass(color).indexOf(this.getDefaultColorClass()) > -1;
  };
  this.getDefaultColorClass = function () {
    return this.prefixClass + '-color-default';
  };

  this.isPrimaryColorClass = function (color) {
    return this.getColorClass(color).indexOf(this.getPrimaryColorClass()) > -1;
  };
  this.getPrimaryColorClass = function () {
    return this.prefixClass + '-color-primary';
  };

  this.isSecondaryColorClass = function (color) {
    return this.getColorClass(color).indexOf(this.getSecondaryColorClass()) > -1;
  };
  this.getSecondaryColorClass = function () {
    return this.prefixClass + '-color-secondary';
  };

  this.isInfoColorClass = function (color) {
    return this.getColorClass(color).indexOf(this.getInfoColorClass()) > -1;
  };
  this.getInfoColorClass = function () {
    return this.prefixClass + '-color-info';
  };

  this.isSuccessColorClass = function (color) {
    return this.getColorClass(color).indexOf(this.getSuccessColorClass()) > -1;
  };
  this.getSuccessColorClass = function () {
    return this.prefixClass + '-color-success';
  };

  this.isWarningColorClass = function (color) {
    return this.getColorClass(color).indexOf(this.getWarningColorClass()) > -1;
  };
  this.getWarningColorClass = function () {
    return this.prefixClass + '-color-warning';
  };

  this.isDangerColorClass = function (color) {
    return this.getColorClass(color).indexOf(this.getDangerColorClass()) > -1;
  };
  this.getDangerColorClass = function () {
    return this.prefixClass + '-color-danger';
  };

}

module.exports = ng.core.Class(new _ngxColorService());