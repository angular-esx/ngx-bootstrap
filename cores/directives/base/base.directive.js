var ngxRenderService = require('./../../services/render/render.service.js');
var ngxBootstrap = require('./../../ngx-bootstrap.js');
ngxBootstrap = require('./../../ngx-bootstrap.utils.js');

function _ngxBaseDirective() {
  var _ATTRIBUTES = {
    COLOR: 'color',
    TYPE: 'type',
    STATE: 'state',
    SIZE: 'size'
  };

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    [new ng.core.Optional(), null],

    function ngxBaseDirective(elementRef, ngxRenderService, ngxBaseService) {
      if (!ngxRenderService) { throw 'ngxRenderService is required'; }

      this.elementRef = elementRef;
      this.ngxRenderService = ngxRenderService.for(elementRef.nativeElement);
      this.ngxBaseService = ngxBaseService;
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _aggregate = this.onAggregatePropertyValueState(changeRecord);

    this.cssClass = (this.onBuildOwnCssClass(_aggregate).join(' ') + ' ' + this.onBuildExtendCssClass(_aggregate).join(' ')).trim();

    this.onSetCssClass();
  };

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = {};

    if (!this.ngxBaseService) { return _aggregate; }

    if (this.ngxBaseService.getColorClass) {
      _aggregate[_ATTRIBUTES.COLOR] = {
        prev: this.ngxBaseService.getColorClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.COLOR)),
        current: this.ngxBaseService.getColorClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.COLOR))
      };
    }

    if (this.ngxBaseService.getTypeClass) {
      _aggregate[_ATTRIBUTES.TYPE] = {
        prev: this.ngxBaseService.getTypeClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.TYPE)),
        current: this.ngxBaseService.getTypeClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.TYPE))
      };
    }

    if (this.ngxBaseService.getStateClass) {
      _aggregate[_ATTRIBUTES.STATE] = {
        prev: this.ngxBaseService.getStateClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.STATE)),
        current: this.ngxBaseService.getStateClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.STATE))
      };
    }

    if (this.ngxBaseService.getSizeClass) {
      _aggregate[_ATTRIBUTES.SIZE] = {
        prev: this.ngxBaseService.getSizeClass(this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.SIZE)),
        current: this.ngxBaseService.getSizeClass(this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.SIZE))
      };
    }

    return _aggregate;
  };

  this.onBuildOwnCssClass = function (aggregate) {
    var _classes = [],
        _prefixClass = this.getPrefixClass();

    if (_prefixClass) { _classes.push(_prefixClass); }

    ngxBootstrap.forEach(aggregate, function (attribute) {
      if (attribute.current) { _classes.push(attribute.current); }
    });

    return _classes;
  };

  this.onBuildExtendCssClass = function (aggregate) {
    var _currentClass = this.ngxRenderService.getClass();

    if (!_currentClass) { return []; }

    var _prefixClass = this.getPrefixClass(),
        _classes = [],
        _isExistingCssClass = false;

    ngxBootstrap.forEach(_currentClass.split(' '), function (className) {
      if (className && className != _prefixClass) {
        _isExistingCssClass = false;

        ngxBootstrap.forEach(aggregate, function (attribute) {
          if (attribute.prev && attribute.prev.indexOf(className) > -1) {
            _isExistingCssClass = true;
            return true;
          }
        });

        if (!_isExistingCssClass) { _classes.push(className); }
      }
    });

    return _classes;
  };

  this.onSetCssClass = function () {
    this.ngxRenderService.setClass(this.cssClass);
  };

  this.getPrefixClass = function () {
    return this.ngxBaseService ? this.ngxBaseService.prefixClass : '';
  };

  this.getPrevPropertyValue = function (changeRecord, propertyName) {
    return !changeRecord[propertyName] || (changeRecord[propertyName].isFirstChange && changeRecord[propertyName].isFirstChange()) ? this[propertyName] : changeRecord[propertyName].previousValue;
  };

  this.getCurrentPropertyValue = function (changeRecord, propertyName) {
    return changeRecord[propertyName] ? changeRecord[propertyName].currentValue : this[propertyName];
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