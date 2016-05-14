var ngxButtonService = require('./services/button.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxButtonComponent() {
  var _base;
  var _ATTRIBUTES = {
    COLOR: 'color',
    SIZE: 'size',
    STATE: 'state'
  };
  
  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxButtonService,

    function ngxButtonComponent(elementRef, ngxRenderService, ngxButtonService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxButtonService = ngxButtonService;
      }
    }
  ];
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-button',
  templateUrl: 'components/button/templates/button.bootstrap4.html',
  styleUrls: ['components/button/css/button.bootstrap4.css'],
  providers:[ngxRenderService],
  properties: ['color', 'size', 'state', 'prefixClass:prefix-class']
})
.Class(new _ngxButtonComponent());