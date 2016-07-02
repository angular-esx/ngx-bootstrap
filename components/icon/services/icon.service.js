var ngxColorService = require('colorService');
var ngxBootstrap = require('utils');

function _ngxIconService() {
  var _defaultFontSet = '',
      _iconFontAlias = {};

  this.constructor = [
    ngxColorService,

    function ngxIconService(ngxColorService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
    }
  ];

  this.setDefaultFontSet = function (className) {
    _defaultFontSet = className;
    return this;
  };
  this.getDefaultFontSet = function () {
    return _defaultFontSet;
  };


  this.setIconFontAlias = function (alias, className) {
    _iconFontAlias[alias] = className || alias;
    return this;
  };
  this.getIconFontClass = function (alias) {
    return _iconFontAlias[alias] || alias;
  };
}

module.exports = ng.core.Class(new _ngxIconService());