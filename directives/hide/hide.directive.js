var ngxHideService = require('./services/hide.service.js');
var ngxBaseDirective = require('./../../cores/directives/base/base.directive.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

var ngxBaseHideDirective = ng.core.Class(new _ngxBaseHideDirective());

function _ngxBaseHideDirective() {
  var _base;
  var _ATTRIBUTES = {
    BREAKPOINT: 'breakpoint'
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxHideService,

    function ngxHideDownDirective(elementRef, ngxRenderService, ngxHideService) {
      ngxBaseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxHideService = ngxHideService;
      }
    }
  ];

  this.onAggregatePropertyValueState = function (changeRecord) {
    var _aggregate = {};

    if (!this.ngxHideService) { return _aggregate; }

    if (this.ngxHideService.getBreakpointClass) {
      _aggregate[_ATTRIBUTES.BREAKPOINT] = {
        prev: this.ngxHideService.getBreakpointClass(this.getPrefixClass(), this.getPrevPropertyValue(changeRecord, _ATTRIBUTES.BREAKPOINT)),
        current: this.ngxHideService.getBreakpointClass(this.getPrefixClass(), this.getCurrentPropertyValue(changeRecord, _ATTRIBUTES.BREAKPOINT))
      };
    }

    return _aggregate;
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  };
}

function _ngxHideDownDirective() {
  var _base;

  this.extends = ngxBaseHideDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxHideService,

    function ngxHideDownDirective(elementRef, ngxRenderService, ngxHideService) {
      ngxBaseHideDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxHideService = ngxHideService;
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-hide-down'
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseHideDirective); }
    return _base;
  };
}

function _ngxHideUpDirective() {
  var _base;

  this.extends = ngxBaseHideDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxHideService,

    function ngxHideUpDirective(elementRef, ngxRenderService, ngxHideService) {
      ngxBaseHideDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxHideService = ngxHideService;
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-hide-up'
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseHideDirective); }
    return _base;
  };
}

module.exports = ng.core.Directive({
  selector: '[ngx-hide-down]',
  properties: ['breakpoint:ngx-hide-down']
})
.Class(new _ngxHideDownDirective());

module.exports = ng.core.Directive({
  selector: '[ngx-hide-up]',
  properties: ['breakpoint:ngx-hide-up']
})
.Class(new _ngxHideUpDirective());