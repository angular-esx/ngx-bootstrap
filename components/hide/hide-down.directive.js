import * as ngCore from '@angular/core';
import ngxBaseHideDirective from './base-hide.directive';

function _ngxHideDownDirective() {
  var _base;

  this.extends = ngxBaseHideDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxHideDownDirective(elementRef, renderer) {
      ngxBaseHideDirective.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-hide-down';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseHideDirective); }
    return _base;
  }
}

export var ngxHideDownDirective = ngCore.Class(new _ngxHideDownDirective());