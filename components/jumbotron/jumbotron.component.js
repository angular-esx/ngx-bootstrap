var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxJumbotronComponent() {
  this.extends = ngxBaseComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,

    function (elementRef, ngxRenderService) {
      ngxBaseComponent.apply(this, arguments);
      
      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
    }
  ];
  
  this.getPrefixClass = function() {
    return 'ngx-jumbotron';
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-jumbotron',
  templateUrl: 'components/jumbotron/templates/jumbotron.bootstrap4.html',
  styleUrls: ['components/jumbotron/css/jumbotron.bootstrap4.css'],
  providers: [ngxRenderService]
})
.Class(new _ngxJumbotronComponent());