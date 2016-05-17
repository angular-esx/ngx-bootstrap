var ngxLabelService = require('./services/label.service.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxLabelComponent() {
  var _base;
  var _ATTRIBUTES = {
    COLOR: 'color',
    TYPE: 'type'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLabelService,

    function ngxLabelComponent(elementRef, ngxRenderService, ngxLabelService) {
      ngxBaseComponent.apply(this, arguments);

      if (elementRef) {
        this.ngxLabelService = ngxLabelService;
      }
    }
  ];
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-label',
  /*Inject template at here*/
  /*Inject style at here*/
  providers: [ngxRenderService],
  properties: ['color', 'type', 'prefixClass:prefix-class']
})
.Class(new _ngxLabelComponent());