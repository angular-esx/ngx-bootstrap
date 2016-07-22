﻿function _ngxGridColumnDirective() {
  var _base, _STYLE_PROPERTIES;

  this.extends = ngx.core.baseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxGridColumnDirective(elementRef, renderer) {
      ngx.core.baseDirective.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-grid-col';
  };

  this.getStyleProperties = function() {
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = {
        SIZE: 'size',
        OFFSET: 'offset',
        ORDER: 'order',
        ALIGN_SELF: 'alignSelf'
      };

      ngx.shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
    }

    return _STYLE_PROPERTIES;
  };

  this.buildCssClassForProperty = function(propertyName, propertyValue){
    var _styleProperties = this.getStyleProperties();

    if(
      propertyName === _styleProperties.SIZE || 
      propertyName === _styleProperties.OFFSET ||
      propertyName === _styleProperties.ORDER ||
      propertyName === _styleProperties.ALIGN_SELF
    ){
      if (ngx.isEmpty(propertyValue)) { return ''; }

      var _parts,
          _cssClasses = [],
          _values = propertyValue.split(' '),
          _prefixClass = this.getPrefixClass();
          _propertyName = propertyName
                          .replace(/([A-Z])/g, function (x, y) { return '-' + y; })
                          .replace(/^-/, '')
                          .toLowerCase();

      ngx.forEach(_values, function (value) {
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
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: 'ngx-grid-col',
  properties: ['size', 'offset', 'order', 'alignSelf:align-self', 'initCssClass:class']
})
.Class(new _ngxGridColumnDirective());
