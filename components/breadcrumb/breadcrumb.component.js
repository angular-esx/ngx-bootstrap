var ngxBreadcrumbService = require('./services/breadcrumb.service.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxRenderService = require('./../../cores/services/render/render.service.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _breadcrumbComponent() {
  var _base;
  var _ATTRIBUTES = {
    COLOR: 'color'
  };
  
  this.extends = ngxBaseComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxBreadcrumbService,

    function breadcrumbComponent(elementRef, ngxRenderService, ngxBreadcrumbService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxBreadcrumbService = ngxBreadcrumbService;
      }
    }
  ];
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-breadcrumb',
  templateUrl: 'components/breadcrumb/templates/breadcrumb.bootstrap4.html',
  styleUrls: ['components/breadcrumb/css/breadcrumb.bootstrap4.css'],
  providers: [ngxRenderService],
  properties: ['color', 'prefixClass:prefix-class']
})
.Class(new _breadcrumbComponent());