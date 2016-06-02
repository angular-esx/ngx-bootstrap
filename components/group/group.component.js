var ngxGroupService = require('./services/group.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxGroupComponent() {
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxGroupService,

    function ngxGroupComponent(elementRef, ngxRenderService, ngxGroupService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxGroupService = ngxGroupService;
      }
    }
  ];

  function _getBaseInstance(context) {
    if (!_base) { _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-group',
  /*Inject template at here*/
  /*Inject style at here*/
  providers: [ngxRenderService],
  properties: ['type', 'size', 'prefixClass:prefix-class']
})
.Class(new _ngxGroupComponent());