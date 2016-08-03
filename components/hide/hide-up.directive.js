import * as ngCore from '@angular/core';
import { ngxBaseHideDirective } from './base-hide.directive';

function _ngxHideUpDirective() {
  var _base;

  this.extends = ngxBaseHideDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxHideUpDirective(elementRef, renderer) {
      ngxBaseHideDirective.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-hide-up';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseHideDirective); }
    return _base;
  }
}

export var ngxHideUpDirective = ngCore.Class(new _ngxHideUpDirective());