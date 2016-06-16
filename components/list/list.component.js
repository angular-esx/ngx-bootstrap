var ngxListService = require('./../../components/list/services/list.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxListComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxListService,

    function ngxListComponent(elementRef, ngxRenderService, ngxListService) {
      ngxBaseComponent.apply(this, arguments);
      if (elementRef) {
        this.ngxListService = ngxListService;
      }
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-list',
  /*Inject template at here*/
  /*Inject style at here*/
  providers: [ngxRenderService],
  properties: ['prefixClass:prefix-class']
})
.Class(new _ngxListComponent());