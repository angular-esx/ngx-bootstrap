(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxItemClass = ngxItem;

  ngxBootstrap.ngxCores.ngxItemComponent = ng.core.Component({
    selector: 'ngx-item',
    template: '<ng-content></ng-content>',
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new ngxItem());

  function ngxItem() {
    var _ATTRIBUTES = {
      STATE: 'state'
    };

    this.constructor = [
     ng.core.ElementRef,
     ngxBootstrap.ngxCores.ngxRendererService,
     ngxBootstrap.ngxCores.ngxItemService,

     function (elementRef, ngxRendererService, ngxItemService) {
       this.elementRef = elementRef;
       this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
       this.ngxItemService = ngxItemService;
     }
    ];

    this.ngAfterContentInit = function () {
      this.state = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.STATE);
    };

    this.ngAfterViewInit = function () {
      if (this.state) {
        this.ngxRendererService.addToElementAttribute('class', this.ngxItemService.getStateClass(this.state), true);
      }
    };
  }

})(window.ngxBootstrap);