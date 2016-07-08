var ngxTabsService = require('./services/tabs.service.js');
var ngxTabHeadDirective = require('./tab-head.directive.js');
var ngxTabContentDirective = require('./tab-content.directive.js');
var ngxBaseDirective = require('baseDirective');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('utils');

function _ngxTabDirective() {
  var _base;
  var _ATTRIBUTES = {
    HEAD: 'head'
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxTabsService,

    function ngxTabDirective(elementRef, ngxRenderService, ngxTabsService) {
      ngxBaseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxTabsService = ngxTabsService;
      }
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    if (changeRecord[_ATTRIBUTES.HEAD]) { _validateProperties(this); }

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);

    this.isActive = this.ngxTabsService.isActiveStateClass(this.getPrefixClass(), this.state);
    this.isDisabled = this.ngxTabsService.isDisabledStateClass(this.getPrefixClass(), this.state);
    
    if (!this.hasActivated && this.isActive && this.contentTemplateRef) {
      if (!this.contentElement) { throw 'Not found content element of tab'; }

      this.hasActivated = true;

      var _self = this;
      setTimeout(function () {
        _self.contentElement.createEmbeddedView(_self.contentTemplateRef, 0);

        _self.ngxTabsService.fadeIn(_self.elementRef.nativeElement);
      });
    }
    else if (this.isActive) {
      this.ngxTabsService.fadeIn(this.elementRef.nativeElement);
    }
    else if (this.state && !this.isActive) {
      this.ngxTabsService.fadeOut(this.elementRef.nativeElement);
    }
  };

  this.ngAfterContentInit = function () {
    if (!this.id) { this.id = ngxBootstrap.newGUID(); }
    if (this.ngxTabHeadDirective) { this.headTemplateRef = this.ngxTabHeadDirective.templateRef; }
    if (this.ngxTabContentDirective) { this.contentTemplateRef = this.ngxTabContentDirective.templateRef; }

    _validateProperties(this);

    _getBaseInstance(this).ngAfterContentInit.apply(this);
  };

  this.activate = function (isActive) {
    if ((isActive && this.isActive) || (!isActive && !this.isActive)) { return; }

    var _changeRecord = {
      state: { previousValue: this.state || '' }
    };
    if (isActive) {
      this.state = (this.ngxTabsService.getStates().ACTIVE + ' ' + _changeRecord.state.previousValue).trim();
    }
    else {
      this.state = this.state.replace(this.ngxTabsService.getStates().ACTIVE, '').trim();
    }
    _changeRecord.state.currentValue = this.state;

    this.ngOnChanges(_changeRecord);
  };

  this.enable = function (isEnabled) {
    if ((isEnabled && !this.isDisabled) || (!isEnabled && this.isDisabled)) { return; }

    var _changeRecord = {
      state: { previousValue: this.state || '' }
    };
    if (isEnabled) {
      this.state = (this.ngxTabsService.getStates().DISABLED + ' ' + _changeRecord.state.previousValue).trim();
    }
    else {
      this.state = this.state.replace(this.ngxTabsService.getStates().DISABLED, '').trim();
    }
    _changeRecord.state.currentValue = this.state;

    this.ngOnChanges(_changeRecord);
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
  providers: [ngxRenderService],
  properties: ['id', 'head', 'state', 'prefixClass:prefix-class'],
  queries: {
    ngxTabHeadDirective: new ng.core.ContentChild(ngxTabHeadDirective),
    ngxTabContentDirective: new ng.core.ContentChild(ngxTabContentDirective),
    contentElement: new ng.core.ContentChild(ngxTabContentDirective, { read: ng.core.ViewContainerRef })
  }
})
.Class(new _ngxTabDirective());