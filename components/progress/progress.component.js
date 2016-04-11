(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxProgressComponent = ng.core.Component({
    selector: 'ngx-progress',
    template: '<progress [value]="value" [max]="max">{{value}}/{{max}}</progress>',
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['value', 'max']
  })
  .Class(new _ngxProgress());

  function _ngxProgress() {
    var _ATTRIBUTES = {
      COLOR: 'color',
      TYPE: 'type'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxProgressService,

      function (elementRef, ngxRendererService, ngxProgressService) {
        this.cssClass = 'progress';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxProgressService = ngxProgressService;
      }
    ];

    this.ngAfterContentInit = function () {
      this.color = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.COLOR);
      this.type = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.TYPE);
      
      if (this.value === undefined || this.value === null || isNaN(this.value) || this.value < 0) {
        this.value = 0;
      }

      if (this.max === undefined || this.max === null || isNaN(this.max) || this.max < 0) {
        this.max = 100;
      }
    };

    this.ngAfterViewInit = function () {
      var _className = this.cssClass + ' ' + this.ngxProgressService.combineColorWithType(this.color, this.type);
      var _self = this;
      ngxBootstrap.forEach(_ATTRIBUTES, function (attribute) {
        _self.ngxRendererService.removeElementAttribute(attribute);
      });
      this.ngxRendererService.removeElementAttribute('class');

      this.ngxRendererService.for(this.elementRef.nativeElement.firstChild);
      this.ngxRendererService.addToElementAttribute('class', _className, true);

      this.ngxRendererService.for(this.elementRef.nativeElement);
    };
  }

})(window.ngxBootstrap);