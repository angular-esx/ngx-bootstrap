var ngxColorService = require('colorService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _ngxProgressService() {
  this.constructor = [
    ngxColorService,

    function ngxProgressService(ngxColorService) {
      ngxBootstrap.shallowCopy(this, ngxColorService);
    }
  ];

  this.isStripedColorClass = function (prefix, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getStripedColorClass(prefixClass)) > -1;
  };
  this.getStripedColorClass = function (prefix) {
    return prefix + '-color-striped';
  };

  this.isAnimatedStripedColorClass = function (prefix, color) {
    return this.getColorClass(prefixClass, color).indexOf(this.getAnimatedStripedColorClass(prefixClass)) > -1;
  };
  this.getAnimatedStripedColorClass = function (prefix) {
    return prefix + '-color-animated-striped';
  };
}

module.exports = ng.core.Class(new _ngxProgressService());