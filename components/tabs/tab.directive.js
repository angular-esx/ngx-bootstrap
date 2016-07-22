var ngxTabsService = require('./services/tabs.service.js');
var ngxTabHeaderDirective = require('./tab-header.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');

function _ngxTabDirective() {
  var _base;
  var _PROPERTIES = {
    HEADER: 'header'
  };

  this.extends = ngx.core.baseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ng.core.Renderer,
    ngxTabsService,

    function ngxTabDirective(elementRef, renderer, ngxTabsService) {
      ngx.core.baseDirective.apply(this, arguments);

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
    
    if (ngx.isNull(_previousIsActive) && this.isActive && this.contentTemplateRef) {
      if (ngx.isNull(this.contentElement)) { throw 'Not found content element of tab'; }

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
    if (ngx.isEmpty(this.id)) { this.id = ngx.newGUID(); }
    if (!ngx.isNull(this.ngxTabHeaderDirective)) { this.headerTemplateRef = this.ngxTabHeaderDirective.templateRef; }
    if (!ngx.isNull(this.ngxTabContentDirective)) { this.contentTemplateRef = this.ngxTabContentDirective.templateRef; }

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
    if (ngx.isNull(context.headerTemplateRef) && ngx.isEmpty(context.header)) { throw 'Header is required for tab'; }
  }

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: 'ngx-tab',
  properties: ['id', 'header', 'state', 'initCssClass:class'],
  queries: {
    ngxTabHeaderDirective: new ng.core.ContentChild(ngxTabHeaderDirective),
    ngxTabContentDirective: new ng.core.ContentChild(ngxTabContentDirective),
    contentElement: new ng.core.ContentChild(ngxTabContentDirective, { read: ng.core.ViewContainerRef })
  }
})
.Class(new _ngxTabDirective());