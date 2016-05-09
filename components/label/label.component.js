var ngxLabelService = require('./services/label.service.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxLabelComponent() {
  var _ATTRIBUTES = {
    COLOR: 'color',
    TYPE: 'type'
  };

  this.extends = ngxBaseComponent;

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLabelService,

    function (elementRef, ngxRenderService, ngxLabelService) {
      ngxBaseComponent.apply(this, arguments);

      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      this.ngxLabelService = ngxLabelService;
    }
  ];
}

module.exports = ng.core.Component({
  selector: 'ngx-label',
  /*Inject template at here*/
  /*Inject style at here*/
  templateUrl: 'components/label/templates/label.bootstrap4.html',
  styleUrls: ['components/label/css/label.bootstrap4.css'],
  providers: [ngxRenderService],
  properties:['color', 'type']
})
.Class(new _ngxLabelComponent());