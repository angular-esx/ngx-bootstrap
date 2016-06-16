var ngxCollapseService = require('./../../components/collapse/services/collapse.service.js');
var ngxBaseDirective = require('./../../cores/directives/base/base.directive.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

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