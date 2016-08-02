import * as ngCore from '@angular/core';
import { ngxBaseDirective, ngxUtils } from  '../cores';


function _ngxBaseHideDirective() {
  var _base, _STYLE_PROPERTIES;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxBaseHideDirective(elementRef, renderer) {
      ngxBaseDirective.apply(this, arguments);
    }
  ];

  this.getStyleProperties = function () {
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = { BREAKPOINT: 'breakpoint' };

      ngxUtils.shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
    }

    return _STYLE_PROPERTIES;
  };

  this.buildCssClassForProperty = function (propertyName, propertyValue) {
    var _cssClass = _getBaseInstance(this).buildCssClassForProperty.apply(this, arguments);

    if(propertyName === this.getStyleProperties().BREAKPOINT){
      _cssClass = _cssClass.replace(new RegExp(propertyName + '-', 'g'), '');
    }
    
    return _cssClass;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

export var ngxBaseHideDirective = ngCore.Class(new _ngxBaseHideDirective());