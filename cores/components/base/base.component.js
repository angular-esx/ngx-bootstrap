var ngCore = require('@angular/core/index.js');
var ngxBaseDirective = require('../../directives/base/base.directive.js');

function _ngxBaseComponent() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxBaseComponent(elementRef, renderer) {
      ngxBaseDirective.apply(this, arguments);
    }
  ];

  this.ngAfterViewInit = function () { };

  this.ngAfterViewChecked = function () { };
  
  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ngCore.Class(new _ngxBaseComponent());