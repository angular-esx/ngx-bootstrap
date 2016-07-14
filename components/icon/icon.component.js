var ngxIconService = require('./services/icon.service.js');
var ngxBaseComponent = require('baseComponent');
var ngxBootstrap = require('ngxBootstrap');

function _ngxIconComponent() {
  var _base, _STYLE_PROPERTIES;
  var _PROPERTIES = {
    SVG_SRC: 'svgSrc',
    SVG_ICON: 'svgIcon'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxIconService,

    function ngxIconComponent(elementRef, renderer, ngxIconService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxIconService = ngxIconService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    if(changeRecord.hasOwnProperty(_PROPERTIES.SVG_SRC) || changeRecord.hasOwnProperty(_PROPERTIES.SVG_ICON)){
      var _self = this;

      if (changeRecord.hasOwnProperty(_PROPERTIES.SVG_ICON)) {
        var _parts = _splitIconKey(this.svgIcon);

        this.ngxIconService.getSvgIconByName(_parts.iconName, _parts.namespace)
        .subscribe(function(svgElement){
          _setSvgElement(_self, svgElement);
        });
      } 
      else {
        this.ngxIconService.getSvgIconByUrl(this.svgSrc)
        .subscribe(function(svgElement){
          _setSvgElement(_self, svgElement);
        });
      }
    }
    else {
      var _styleProperties = this.getStyleProperties();

      if(changeRecord.hasOwnProperty(_styleProperties.FONT_SET)){
        this.buildChangeRecord
        (
          _styleProperties.FONT_SET, 
          this.ngxIconService.getIconFontClass(changeRecord[_styleProperties.FONT_SET].currentValue), 
          null, 
          changeRecord
        );
      }

      if(changeRecord.hasOwnProperty(_styleProperties.FONT_ICON)){
        this.buildChangeRecord
        (
          _styleProperties.FONT_ICON, 
          changeRecord[_styleProperties.FONT_ICON].currentValue, 
          null, 
          changeRecord
        );
      }
    }

    _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
  };

  this.initDefaultValues = function(){
    var _changeRecord;
    if (!this.svgSrc && !this.svgIcon && !this.fontSet) {
      var _iconFontClass = this.ngxIconService.getIconFontClass(this.ngxIconService.getDefaultFontSet());
      _changeRecord = this.buildChangeRecord(this.getStyleProperties().FONT_SET, _iconFontClass);
    }

    return _changeRecord;
  };

  this.needRebuildCssClass = function(changeRecord){
    var _styleProperties = this.getStyleProperties();

    return changeRecord.hasOwnProperty(_styleProperties.FONT_ICON) || 
    changeRecord.hasOwnProperty(_styleProperties.FONT_SET) || 
    _getBaseInstance(this).needRebuildCssClass.apply(this, arguments);
  };

  this.buildCssClassForProperty = function(propertyName, propertyValue){
    var _styleProperties = this.getStyleProperties();

    if(propertyName === _styleProperties.FONT_SET || propertyName === _styleProperties.FONT_ICON){
      return propertyValue;
    }
    else{
      _getBaseInstance(this).buildCssClassForProperty.apply(this, arguments);
    }
  };

  this.getPrefixClass = function () {
    return 'ngx-icon';
  };

  this.getStyleProperties = function(){
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = {
        FONT_SET: 'fontSet',
        FONT_ICON: 'fontIcon'
      };

      ngxBootstrap.shallowCopy(_STYLE_PROPERTIES, _getBaseInstance(this).getStyleProperties.apply(this));
    }

    return _STYLE_PROPERTIES;
  };

  function _splitIconKey(iconKey) {
    if (!iconKey) { return { namespace: '', iconName: '' }; }
    
    var _parts = iconKey.split(':');
    switch (_parts.length) {
      case 1:
        return { namespace: '', iconName: _parts[0] };
      case 2:
        return { namespace: _parts[0], iconName: _parts[1] };
      default:
        throw 'Invalid icon key';
    }
  }

  function _setSvgElement(context, svgElement) {
    var _nativeElement = context.elementRef.nativeElement;
    
    _nativeElement.innerHTML = '';
    _nativeElement.appendChild(svgElement);
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-icon',
  template: require('./themes/' + __THEME__ + '/templates/icon.html'),
  styles: [require('./themes/' + __THEME__ + '/scss/icon.scss')],
  properties: [
    'alt',
    'svgSrc:svg-src',
    'svgIcon:svg-icon',
    'fontSet:font-set',
    'fontIcon:font-icon',
    'prefixClass:prefix-class'
  ]
})
.Class(new _ngxIconComponent());