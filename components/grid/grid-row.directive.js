var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;

function _ngxGridRowDirective() {
  var _base, _STYLE_PROPERTIES;

  this.extends = ngxCore.baseDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,

    function ngxGridRowDirective(elementRef, renderer) {
      ngxCore.baseDirective.apply(this, arguments);
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

      ngxUtil.shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
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
      if (ngxUtil.isEmpty(propertyValue)) { return ''; }

      var _parts,
          _cssClasses = [],
          _values = propertyValue.split(' '),
          _prefixClass = this.getPrefixClass();
          _propertyName = propertyName
                          .replace(/([A-Z])/g, function (x, y) { return '-' + y; })
                          .replace(/^-/, '')
                          .toLowerCase();

      ngxUtil.forEach(_values, function (value) {
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
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseDirective); }
    return _base;
  }
}

module.exports = ngCore.Directive({
  selector: 'ngx-grid-row',
  properties: [
    'justifyContent:justify-content', 
    'alignContent:align-content', 
    'alignItems:align-items',
    'initCssClass:class'
  ]
})
.Class(new _ngxGridRowDirective());
