var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

var ngxBaseHideDirective = ngCore.Class(new _ngxBaseHideDirective());

function _ngxBaseHideDirective() {
  var _base, _STYLE_PROPERTIES;

  this.extends = ngxCore.baseDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxBaseHideDirective(elementRef, renderer) {
      ngxCore.baseDirective.apply(this, arguments);
    }
  ];

  this.getStyleProperties = function () {
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = { BREAKPOINT: 'breakpoint' };

      ngxUtil.shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
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
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseDirective); }
    return _base;
  }
}

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

module.exports = {
  hideUpDirective: ngCore.Directive({
    selector: '[ngx-hide-up]',
    properties: ['breakpoint:ngx-hide-up', 'initCssClass:class']
  })
  .Class(new _ngxHideUpDirective()),

  hideDownDirective: ngCore.Directive({
    selector: '[ngx-hide-down]',
    properties: ['breakpoint:ngx-hide-down', 'initCssClass:class']
  })
  .Class(new _ngxHideDownDirective())
};