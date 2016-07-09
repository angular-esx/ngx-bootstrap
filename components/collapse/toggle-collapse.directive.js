var ngxCollapseService = require('./services/collapse.service.js');
var ngxBaseDirective = require('baseDirective');
var ngxRenderService = require('renderService');

function _ngxToggleCollapseDirective() {
  var _base;
  var _ATTRIBUTES = {
    ID: 'id',
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxCollapseService,

    function ngxToggleCollapseDirective(elementRef, ngxRenderService, ngxCollapseService) {
      ngxBaseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxCollapseService = ngxCollapseService;
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-toggle-collapse';
  };

  this.toggle = function () {
    this.ngxCollapseService.toggle(this.id);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-collapse]',
  providers: [ngxRenderService],
  properties: ['id: ngx-toggle-collapse'],
  host: {
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleCollapseDirective());