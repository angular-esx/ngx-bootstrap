var ngxBootstrap = require('./../../../cores/ngx-bootstrap.js');

function _ngxSizeService() {
  var _SIZES;

  this.constructor = function () {
    this.prefixClass = '';
  };

  this.getSizeClass = function (sizes) {
    if (!sizes) { return ''; }
    
    var _sizes = sizes.split(' ');
    var _size, _funcName, _self = this, _sizeClasses = [];

    ngxBootstrap.forEach(_sizes, function (size) {
      _size = size.toLowerCase().replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
      _size = _size.charAt(0).toUpperCase() + _size.slice(1);

      _funcName = 'get' + _size + 'SizeClass';
      _sizeClasses.push(_self[_funcName] ? _self[_funcName]() : _self.prefixClass + '-size-' + _size);
    });

    return _sizeClasses.length === 0 ? '' : _sizeClasses.join(' ');
  };

  this.getSizes = function () {
    if (!_SIZES) {
      _SIZES = {};
      var _size;

      for (var prop in this) {
        if (typeof this[prop] == 'function' && /get.+SizeClass/.test(prop)) {
          _size = prop.replace('get', '').replace('SizeClass', '')
                      .replace(/([A-Z])/g, function (x, y) { return '_' + y; })
                      .replace(/^_/, '');

          _SIZES[_size.toUpperCase()] = _size.toLocaleLowerCase().replace(/_/g, '-');
        }
      }
    }

    return ngxBootstrap.shallowCopy({}, _SIZES);
  };

  this.isLargeSizeClass = function (size) {
    return this.getSizeClass(size).indexOf(this.getLargeSizeClass()) > -1;
  };
  this.getLargeSizeClass = function () {
    return this.prefix + '-size-large';
  };
  
  this.isSmallSizeClass = function (size) {
    return this.getSizeClass(size).indexOf(this.getSmallSizeClass()) > -1;
  };
  this.getSmallSizeClass = function () {
    return this.prefix + '-size-small';
  };
  
  this.isBlockSizeClass = function (size) {
    return this.getSizeClass(size).indexOf(this.getBlockSizeClass()) > -1;
  };
  this.getBlockSizeClass = function () {
    return this.prefix + '-size-block';
  };
}

module.exports = ng.core.Class(new _ngxSizeService());