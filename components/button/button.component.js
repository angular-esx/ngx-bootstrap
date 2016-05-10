var ngxButtonService = require('./services/button.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxButtonComponent() {
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

    function (elementRef, ngxRenderService, ngxButtonService) {
      ngxBaseComponent.apply(this, arguments);
      
      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      this.ngxButtonService = ngxButtonService;
    }
  ];
}

module.exports = ng.core.Component({
  selector: 'ngx-button',
  templateUrl: 'components/button/templates/button.bootstrap4.html',
  styleUrls: ['components/button/css/button.bootstrap4.css'],
  providers:[ngxRenderService],
  properties: ['color', 'size', 'state']
})
.Class(new _ngxButtonComponent());