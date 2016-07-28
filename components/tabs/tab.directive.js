var ngCore = require('@angular/core/index.js');
var ngxCore = require('../../cores/index.js');
var ngxUtil = ngxCore.utils;
var ngxTabsService = require('./services/tabs.service.js');
var ngxTabHeaderDirective = require('./tab-header.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');

function _ngxTabDirective() {
  var _base;
  var _PROPERTIES = {
    HEADER: 'header'
  };

  this.extends = ngxCore.baseDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
    ngxTabsService,

    function ngxTabDirective(elementRef, renderer, ngxTabsService) {
      ngxCore.baseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxTabsService = ngxTabsService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _styleProperties = this.getStyleProperties();

    if (changeRecord.hasOwnProperty(_PROPERTIES.HEADER)) { _validateProperties(this); }

    if (!changeRecord.hasOwnProperty(_styleProperties.STATE)) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
      return;  
    }

    var _self = this,
        _previousIsActive = this.isActive;
    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');
    this.isDisabled = this.propertyHasValue(_styleProperties.STATE, 'disabled');
    
    if (ngxUtil.isNull(_previousIsActive) && this.isActive && this.contentTemplateRef) {
      if (ngxUtil.isNull(this.contentElement)) { throw 'Not found content element of tab'; }

      setTimeout(function () {
        _self.contentElement.createEmbeddedView(_self.contentTemplateRef, 0);

        _getBaseInstance(_self).ngOnChanges.apply(_self, [changeRecord]);

        _self.ngxTabsService.fadeIn(_self.elementRef);
      });
    }
    else if (this.isActive) {
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);

      this.ngxTabsService.fadeIn(this.elementRef);
    }
    else if (!this.isActive) {
      this.ngxTabsService.fadeOut(this.elementRef)
      .then(function () {
        _getBaseInstance(_self).ngOnChanges.apply(_self, [changeRecord]);
      });
    }
  };

  this.ngAfterContentInit = function () {
    if (ngxUtil.isEmpty(this.id)) { this.id = ngxUtil.newGUID(); }
    if (!ngxUtil.isNull(this.ngxTabHeaderDirective)) { this.headerTemplateRef = this.ngxTabHeaderDirective.templateRef; }
    if (!ngxUtil.isNull(this.ngxTabContentDirective)) { this.contentTemplateRef = this.ngxTabContentDirective.templateRef; }

    _validateProperties(this);

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  this.getPrefixClass = function () {
    return 'ngx-tab';
  };

  this.activate = function (isActive) {
    if (this.isActive === isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    if(isActive){
      this.addValueToProperty(_styleProperties.STATE, 'active');
    }
    else{
      this.removeValueFromProperty(_styleProperties.STATE, 'active');
    }

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  this.enable = function (isEnabled) {
    if (this.isDisabled !== isEnabled) { return; }

    var _styleProperties = this.getStyleProperties();

    if(isEnabled){
      this.addValueToProperty(_styleProperties.STATE, 'disabled');
    }
    else{
      this.removeValueFromProperty(_styleProperties.STATE, 'disabled');
    }

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  };

  function _validateProperties(context) {
    if (ngxUtil.isNull(context.headerTemplateRef) && ngxUtil.isEmpty(context.header)) { throw 'Header is required for tab'; }
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxCore.baseDirective); }
    return _base;
  }
}

module.exports = ngCore.Directive({
  selector: 'ngx-tab',
  properties: ['id', 'header', 'state', 'initCssClass:class'],
  queries: {
    ngxTabHeaderDirective: new ngCore.ContentChild(ngxTabHeaderDirective),
    ngxTabContentDirective: new ngCore.ContentChild(ngxTabContentDirective),
    contentElement: new ngCore.ContentChild(ngxTabContentDirective, { read: ngCore.ViewContainerRef })
  }
})
.Class(new _ngxTabDirective());