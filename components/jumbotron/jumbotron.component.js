var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxJumbotronComponent() {
  var _base;
  
  this.extends = ngxBaseComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,

    function ngxJumbotronComponent(elementRef, ngxRenderService) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];
  
  this.getPrefixClass = function() {
    return 'ngx-jumbotron';
  };
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-jumbotron',
  templateUrl: 'components/jumbotron/templates/jumbotron.bootstrap4.html',
  styleUrls: ['components/jumbotron/css/jumbotron.bootstrap4.css'],
  providers: [ngxRenderService]
})
.Class(new _ngxJumbotronComponent());