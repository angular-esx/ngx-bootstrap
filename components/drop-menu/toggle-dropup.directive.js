var ngxDropMenuService = require('./../../components/drop-menu/services/drop-menu.service.js');
var ngxBaseDirective = require('./../../cores/directives/base/base.directive.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxToggleDropupDirective() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxDropMenuService,

    function ngxToggleDropupDirective(elementRef, ngxRenderService, ngxDropMenuService) {
      ngxBaseDirective.apply(this, arguments);

      if (elementRef) {
        this.ngxDropMenuService = ngxDropMenuService;
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-toggle-dropup';
  };

  this.toggle = function () {
    this.ngxDropMenuService.toggle(this.id, this.ngxDropMenuService.getActions().TOGGLE_DROPUP);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-dropup]',
  providers: [ngxRenderService],
  properties: ['id: ngx-toggle-dropup'],
  host: {
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleDropupDirective());