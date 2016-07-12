var ngxBootstrap = require('utils');

function _ngxBaseDirective() {
  var _STYLE_PROPERTIES = {
    COLOR: 'color',
    TYPE: 'type',
    STATE: 'state',
    SIZE: 'size',
    POSITION: 'position'
  };

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,

    function ngxBaseDirective(elementRef, renderer) {
      if (!elementRef) { throw 'elementRef is required'; }
      if (!renderer) { throw 'renderer is required'; }

      this.elementRef = elementRef;
      this.renderer = renderer;
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    if(this.needRebuildCssClass(changeRecord)){
      this.cssClass = this.buildCssClass(changeRecord);
      
      this.renderer.setElementProperty(this.elementRef.nativeElement, 'className', this.cssClass);
    }
  };


  this.needRebuildCssClass = function(changeRecord){
    var _styleProperties = this.getStyleProperties(),
        _propertyName;

    for (var prop in _styleProperties) {
      _propertyName = _styleProperties[prop];

      if (changeRecord[_propertyName]) { return true; }
    }

    return false;
  };

  this.buildCssClass = function(changeRecord){
    var _cssClasses = [],
        _self = this,
        _styleProperties = this.getStyleProperties(),
        _cssClass;

    ngxBootstrap.forEach(_styleProperties, function(prop){
      if(changeRecord[prop]){
        _cssClass = _self.buildCssClassForProperty(changeRecord[prop], prop);
        if(_cssClass){ _cssClasses.push(_cssClass); }
      }
    });

    if(this.initCssClass){ _cssClasses.push(this.initCssClass); }

    return _cssClasses.join(' ');
  };

  this.buildCssClassForProperty = function(changedProperty, propertyName){
    var _parts = [],
        _prefixClass = this.getPrefixClass();

    if(_prefixClass){ _parts.push(_prefixClass); }
    _parts.push(propertyName);
    _parts.push(changedProperty.currentValue);

    return _parts.join('-');
  };

  this.buildChangeRecord = function(propertyName, currentValue, previousValue, currentChangeRecord){
    var _changeRecord = currentChangeRecord || {};
    _changeRecord[propertyName] = {
      previousValue: previousValue,
      currentValue: currentValue
    };

    return _changeRecord;
  };


  this.getPrefixClass = function () {
    return '';
  };

  this.getStyleProperties = function(){
    return _STYLE_PROPERTIES;
  };

  this.getBaseInstance = function (baseClass) {
    if (!baseClass || !baseClass.name) { return null; }

    var _baseInstance = this;
    while (_baseInstance) {
      if (_baseInstance.constructor.name != baseClass.name) {
        _baseInstance = Object.getPrototypeOf(_baseInstance);
        continue;
      }
      else {
        break;
      }
    }

    if (!_baseInstance) { baseClass.apply(_baseInstance); }
    return _baseInstance;
  };
}

module.exports = ng.core.Class(new _ngxBaseDirective());