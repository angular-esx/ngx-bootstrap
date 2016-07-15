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
      
      _setCssClass(this, this.cssClass);
    }
  };

  this.ngOnInit = function() {
    var _changeRecord = this.initDefaultValues();
    
    if(_changeRecord){ 
      this.ngOnChanges(_changeRecord); 
    }
    else if(this.cssClass === undefined && this.getPrefixClass()){
      var _cssClasses = [this.getPrefixClass()];
      if(this.initCssClass){ _cssClasses.push(this.initCssClass); }

      _setCssClass(this, _cssClasses.join(' '));
     }
  };

  this.ngDoCheck = function(){};

  this.ngAfterContentInit = function(){};

  this.ngAfterContentChecked = function(){};

  this.ngOnDestroy = function(){};


  this.needRebuildCssClass = function(changeRecord){
    var _styleProperties = this.getStyleProperties(),
        _propertyName;

    for (var prop in _styleProperties) {
      _propertyName = _styleProperties[prop];

      if (changeRecord.hasOwnProperty(_propertyName)) { return true; }
    }

    return false;
  };

  this.buildCssClass = function(changeRecord){
    var _cssClasses = [],
        _self = this,
        _prefixClass = this.getPrefixClass(),
        _styleProperties = this.getStyleProperties(),
        _cssClass;

    if(_prefixClass){ _cssClasses.push(_prefixClass); }

    ngxBootstrap.forEach(_styleProperties, function(prop){
      if(changeRecord.hasOwnProperty(prop)){
        _cssClass = _self.buildCssClassForProperty(prop, changeRecord[prop].currentValue);
      }
      else {
        _cssClass = _self.buildCssClassForProperty(prop, _self[prop]);
      }

      if(_cssClass){ _cssClasses.push(_cssClass); }
    });

    if(this.initCssClass){ _cssClasses.push(this.initCssClass); }

    return _cssClasses.join(' ');
  };

  this.buildCssClassForProperty = function(propertyName, propertyValue){
    if(!propertyName || !propertyValue){ return ''; } 

    var _parts = [],
        _prefixClass = this.getPrefixClass(),
        _propertyName = propertyName
                        .replace(/([A-Z])/g, function (x, y) { return '-' + y; })
                        .replace(/^-/, '')
                        .toLowerCase();

    if(propertyValue.trim().indexOf(' ') > -1){
      var _cssClasses = [];

      ngxBootstrap.forEach(propertyValue.split(' '), function(value) {
        _parts.length = 0;  
        
        if(_prefixClass){ _parts.push(_prefixClass); }
        
        _parts.push(_propertyName);
        _parts.push(value);

        _cssClasses.push(_parts.join('-'));
      });

      return _cssClasses.join(' ');
    }
    else {
      if(_prefixClass){ _parts.push(_prefixClass); }
      _parts.push(_propertyName);
      _parts.push(propertyValue);

      return _parts.join('-');
    }
  };

  this.initDefaultValues = function(){
    return null;
  };

  this.buildChangeRecord = function(propertyName, currentValue, previousValue, currentChangeRecord){
    var _changeRecord = currentChangeRecord || {};
    _changeRecord[propertyName] = {
      previousValue: previousValue,
      currentValue: currentValue
    };

    return _changeRecord;
  };

  this.propertyHasValue = function(propertyName, value){
    if(!propertyName || !value || !this[propertyName]){ return false; }

    return this[propertyName].indexOf(value) > -1;
  };

  this.addValueToProperty = function(propertyName, value){
    if(!propertyName || !value) { return; }

    this[propertyName] = ((this[propertyName] || '') + ' ' + value).trim();
  };

  this.removeValueFromProperty = function(propertyName, value){
    if(!propertyName || !value || !this[propertyName]) { return; }

    this[propertyName] = this[propertyName].replace(new RegExp(value, 'g'), '').trim();
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

  function _setCssClass(context, cssClass){
    context.renderer.setElementProperty(context.elementRef.nativeElement, 'className', cssClass);
  }
}

module.exports = ng.core.Class(new _ngxBaseDirective());