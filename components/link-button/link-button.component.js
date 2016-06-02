var ngxLinkButtonService = require('./services/link-button.service.js');
var ngxRenderService = require('./../../cores/services/render.service.js');
var ngxLinkComponent = require('./../../cores/components/link/link.component.js');
var ngxBaseComponent = require('./../../cores/components/base/base.component.js');
var ngxBootstrap = require('./../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../cores/ngx-bootstrap.utils.js');

function _ngxLinkButtonComponent() {
  var _base;
  
  this.extends = ngxLinkComponent;
  
  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxLinkButtonService,

    function ngxLinkButtonComponent (elementRef, ngxRenderService, ngxLinkButtonService) {
      ngxLinkComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxLinkButtonService = ngxLinkButtonService;
      }
    }
  ];
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxLinkComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-link-button',
  /*Inject template at here*/
  /*Inject style at here*/
  providers: [ngxRenderService],
  queries: {
    linkElement: new ng.core.ViewChild('link')
  },
  properties: ['href', 'hreflang', 'media-query', 'media-type', 'rel', 'target', 'color', 'size', 'state', 'prefixClass:prefix-class'],
  events: ['clickEmitter: click']
})
.Class(new _ngxLinkButtonComponent());