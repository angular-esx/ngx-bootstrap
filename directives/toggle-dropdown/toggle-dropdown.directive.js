var ngxDropMenuService = require('./../../components/drop-menu/services/drop-menu.service.js');
var ngxBaseDirective = require('./../../cores/directives/base/base.directive.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxToggleDropdownDirective() {
  var _base;
  var _ATTRIBUTES = {
    ID: 'id',
  };

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxDropMenuService,

    function ngxToggleDropdownDirective(elementRef, ngxRenderService, ngxDropMenuService) {
      ngxBaseDirective.apply(this, arguments);

      this.ngxDropMenuService = ngxDropMenuService;
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-toggle-dropdown';
  };

  this.toggle = function () {
    this.ngxDropMenuService.toggle(this.id, this.ngxDropMenuService.getActions().TOGGLE_DROPDOWN);
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: '[ngx-toggle-dropdown]',
  providers: [ngxRenderService],
  properties: ['id: ngx-toggle-dropdown'],
  host: {
    '(click)': 'toggle()'
  }
})
.Class(new _ngxToggleDropdownDirective());