(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLabelClass = ngxLabel;

  ngxBootstrap.ngxComponents.ngxLabelComponent = ng.core.Directive({
    selector: 'ngx-label',
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new ngxLabel());

  function ngxLabel() {
    var _ATTRIBUTES = {
      COLOR: 'color',
      TYPE: 'type'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxLabelService,

      function (elementRef, ngxRendererService, ngxLabelService) {
        this.cssClass = 'label';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef);
        this.ngxLabelService = ngxLabelService;
      }
    ];

    this.ngAfterViewInit = function () {
      this.color = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.COLOR);
      this.type = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.TYPE);

      var _className = this.cssClass + ' ' + this.ngxLabelService.combineColorWithType(this.color, this.type);
      this.ngxRendererService.addElementAttribute('class', _className, true);
    };

  };

})(window.ngxBootstrap);