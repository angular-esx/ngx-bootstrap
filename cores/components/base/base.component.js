var ngxBaseDirective = require('baseDirective');
var ngxBootstrap = require('utils');

function _ngxBaseComponent() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxBaseComponent(elementRef, renderer) {
      ngxBaseDirective.apply(this, arguments);
    }
  ];
  
  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Class(new _ngxBaseComponent());