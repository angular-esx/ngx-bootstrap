import * as ngCore from '@angular/core';
import { ngxBaseDirective, ngxUtils } from  '../cores';
import ngxTabsService from './services/tabs.service';
import ngxTabHeaderDirective from './tab-header.directive';
import ngxTabContentDirective from './tab-content.directive';

function _ngxTabDirective() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ngCore.ElementRef,
    ngCore.Renderer,
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

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');
    this.isDisabled = this.propertyHasValue(_styleProperties.STATE, 'disabled');
    
    _getBaseInstance(this).ngOnChanges.apply(this, [changeRecord]);
  };

  this.ngAfterContentInit = function () {
    if (ngxUtils.isEmpty(this.id)) { this.id = ngxUtils.newGUID(); }

    if (ngxUtils.isNull(this.headerTemplate)) {
      throw 'Header is required for tab';
    }
    if (ngxUtils.isNull(this.contentTemplate)) {
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
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

export var ngxTabDirective = ngCore.Directive({
  selector: 'ngx-tab',
  properties: ['id', 'state', 'initCssClass:class'],
  queries: {
    headerTemplate: new ngCore.ContentChild(ngxTabHeaderDirective),
    contentTemplate: new ngCore.ContentChild(ngxTabContentDirective)
  }
})
.Class(new _ngxTabDirective());