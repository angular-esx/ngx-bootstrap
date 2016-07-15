var ngxTabsService = require('./services/tabs.service.js');
var ngxTabHeadDirective = require('./tab-head.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');
var ngxBaseDirective = require('baseDirective');
var ngxBootstrap = require('ngxBootstrap');

function _ngxTabDirective() {
  var _base;
  var _PROPERTIES = {
    HEAD: 'head'
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxTabsService,

    function ngxTabDirective(elementRef, renderer, ngxTabsService) {
      ngxBaseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxTabsService = ngxTabsService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    var _styleProperties = this.getStyleProperties();

    if (changeRecord[_PROPERTIES.HEAD]) { _validateProperties(this); }

    if(!changeRecord[_styleProperties.STATE]){
      _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
      return;  
    }

    var _self = this,
        _previousIsActive = this.isActive;
    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');
    this.isDisabled = this.propertyHasValue(_styleProperties.STATE, 'disabled');
    
    if (_previousIsActive === undefined && this.isActive && this.contentTemplateRef) {
      if (!this.contentElement) { throw 'Not found content element of tab'; }

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
    if (!this.id) { this.id = ngxBootstrap.newGUID(); }
    if (this.ngxTabHeadDirective) { this.headTemplateRef = this.ngxTabHeadDirective.templateRef; }
    if (this.ngxTabContentDirective) { this.contentTemplateRef = this.ngxTabContentDirective.templateRef; }

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
    if (!context.headTemplateRef && !context.head) { throw 'Head is required for tab'; }
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: 'ngx-tab',
  properties: ['id', 'head', 'state', 'initCssClass:class'],
  queries: {
    ngxTabHeadDirective: new ng.core.ContentChild(ngxTabHeadDirective),
    ngxTabContentDirective: new ng.core.ContentChild(ngxTabContentDirective),
    contentElement: new ng.core.ContentChild(ngxTabContentDirective, { read: ng.core.ViewContainerRef })
  }
})
.Class(new _ngxTabDirective());