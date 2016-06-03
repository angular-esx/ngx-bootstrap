var ngxDropMenuItemService = require('./services/drop-menu-item.service.js');
var ngxBaseDirective = require('./../../cores/directives/base/base.directive.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

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
