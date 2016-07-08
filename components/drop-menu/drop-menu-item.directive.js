var ngxDropMenuItemService = require('./services/drop-menu-item.service.js');
var ngxBaseDirective = require('baseDirective');
var ngxRenderService = require('renderService');
var ngxBootstrap = require('utils');

function _ngxDropMenuItemDirective() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxDropMenuItemService,

    function ngxDropMenuItemDirective(elementRef, ngxRenderService, ngxDropMenuItemService) {
      ngxBaseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxDropMenuItemService = ngxDropMenuItemService;
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-drop-menu-item';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: '[ngx-drop-menu-item]',
  providers: [ngxRenderService],
  properties: ['state']
})
.Class(new _ngxDropMenuItemDirective());
