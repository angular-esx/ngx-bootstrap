var ngxRenderService = require('./../../services/render/render.service.js');
var ngxItemService = require('./services/item.service.js');

// ngxBootstrap.ngxClass.ngxItemClass = _ngxItem;
var ngxItemComponent = ng.core.Component({
  selector: 'ngx-item',
  template: '<ng-content></ng-content>',
  providers: [ngxRenderService]
})
.Class(new _ngxItem());

function _ngxItem() {
  var _ATTRIBUTES = {
    STATE: 'state'
  };

  this.constructor = [
    ng.core.ElementRef,
    ngxRenderService,
    ngxItemService,

    function (elementRef, ngxRenderService, ngxItemService) {
      this.elementRef = elementRef;
      this.ngxRenderService = ngxRenderService.for(elementRef.nativeElement);
      this.ngxItemService = ngxItemService;
    }
  ];

  this.ngAfterContentInit = function () {
    this.state = this.ngxRenderService.getElementAttribute(_ATTRIBUTES.STATE);
  };

  this.ngAfterViewInit = function () {
    if (this.state) {
      this.ngxRenderService.addToElementAttribute('class', this.ngxItemService.getStateClass(this.state), true);
    }
  };
}

module.exports = ngxItemComponent;