var ngxTabsService = require('./services/tabs.service.js');
var ngxTabHeaderDirective = require('./tab-header.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');

function _ngxTabDirective() {
  var _base;

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

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');
    this.isDisabled = this.propertyHasValue(_styleProperties.STATE, 'disabled');
    
    _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
  };

  this.ngAfterContentInit = function () {
    if (ngx.isEmpty(this.id)) { this.id = ngx.newGUID(); }

    if (ngx.isNull(this.headerTemplate)) {
      throw 'Header is required for tab';
    }
    if (ngx.isNull(this.contentTemplate)) {
      throw 'Content is required for tab';
    }

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

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngx.core.baseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: 'ngx-tab',
  properties: ['id', 'state', 'initCssClass:class'],
  queries: {
    headerTemplate: new ng.core.ContentChild(ngxTabHeaderDirective),
    contentTemplate: new ng.core.ContentChild(ngxTabContentDirective)
  }
})
.Class(new _ngxTabDirective());