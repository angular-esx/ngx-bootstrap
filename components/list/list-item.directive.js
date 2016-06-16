var ngxListService = require('./../../components/list/services/list.service.js');
var ngxBaseDirective = require('./../../cores/directives/base/base.directive.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxListItemDirective() {
  var _base;

  this.extends = ngxBaseDirective;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxListService,

    function ngxListItemDirective(elementRef, ngxRenderService, ngxListService) {
      ngxBaseDirective.apply(this, arguments);
      if (elementRef) {
        this.ngxListService = ngxListService;
      }
    }
  ];

  this.getPrefixClass = function () {
    return 'ngx-list-item';
  };

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseDirective); }
    return _base;
  }
}

module.exports = ng.core.Directive({
  selector: '[ngx-list-item]',
  providers: [ngxRenderService],
  properties: ['color:ngx-list-item-color', 'state:ngx-list-item-state']
})
.Class(new _ngxListItemDirective());