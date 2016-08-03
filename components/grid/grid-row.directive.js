import * as ngCore from '@angular/core';
import { ngxBaseDirective, ngxUtils } from  '../../cores';

function _ngxGridRowDirective() {
  var _base, _STYLE_PROPERTIES;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxGridRowDirective(elementRef, renderer) {
      ngxBaseDirective.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-grid-row';
  };

  this.getStyleProperties = function() {
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = {
        JUSTIFY_CONTENT: 'justifyContent',
        ALIGN_CONTENT: 'alignContent',
        ALIGN_ITENS: 'alignItems'
      };

      ngxUtils.shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
    }

    return _STYLE_PROPERTIES;
  };

  this.buildCssClassForProperty = function(propertyName, propertyValue){
    var _styleProperties = this.getStyleProperties();

    if(
      propertyName === _styleProperties.JUSTIFY_CONTENT || 
      propertyName === _styleProperties.ALIGN_CONTENT ||
      propertyName === _styleProperties.ALIGN_ITENS
    ){
      if (ngxUtils.isEmpty(propertyValue)) { return ''; }

      var _parts,
          _cssClasses = [],
          _values = propertyValue.split(' '),
          _prefixClass = this.getPrefixClass();
          _propertyName = propertyName
                          .replace(/([A-Z])/g, function (x, y) { return '-' + y; })
                          .replace(/^-/, '')
                          .toLowerCase();

      ngxUtils.forEach(_values, function (value) {
        _parts = value.split('-');

        if (_parts.length === 2) {
          _cssClasses.push([_prefixClass, _parts[0], _propertyName, _parts[1]].join('-'));
        }
        else if(_parts.length === 3){
          _cssClasses.push([_prefixClass, _parts[0], _propertyName, _parts[1] + '_' + _parts[2]].join('-'));
        }
      });

      return _cssClasses.length === 0 ? '' : _cssClasses.join(' ');
    }
    else{
      return _getBaseInstance(this).buildCssClassForProperty.apply(this, arguments);
    }
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

export var ngxGridRowDirective = ngCore.Directive({
  selector: 'ngx-grid-row',
  properties: [
    'justifyContent:justify-content', 
    'alignContent:align-content', 
    'alignItems:align-items',
    'initCssClass:class'
  ]
})
.Class(new _ngxGridRowDirective());
