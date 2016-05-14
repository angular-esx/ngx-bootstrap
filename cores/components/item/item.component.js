var ngxItemService = require('./services/item.service.js');
var ngxBaseComponent = require('./../base/base.component.js');
var ngxRenderService = require('./../../services/render/render.service.js');
var ngxBootstrap = require('./../../ngx-bootstrap.js');
ngxBootstrap = require('./../../ngx-bootstrap.utils.js');

function _ngxItemComponent() {
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
    ngxItemService,

    function ngxItemComponent(elementRef, ngxRenderService, ngxItemService) {
      ngxBaseComponent.apply(this, arguments);
      
      if (elementRef) {
        this.ngxItemService = ngxItemService;
      }
    }
  ];
  
  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

module.exports = ng.core.Component({
  selector: 'ngx-item',
  template: '<ng-content></ng-content>',
  providers: [ngxRenderService],
  properties: ['color', 'size', 'state', 'prefixClass:prefix-class']
})
.Class(new _ngxItemComponent());