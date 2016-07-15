(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLabelClass = ngxJumbotron;

  ngxBootstrap.ngxComponents.ngxJumbotronComponent = ng.core.Directive({
    selector: 'ngx-jumbotron',
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    injectable: []
  })
  .Class(new ngxJumbotron());

  function ngxJumbotron() {
    var _ATTRIBUTES = {
      TYPE: 'type'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxJumbotronService,

      function (elementRef, ngxRendererService, ngxJumbotronService) {
        this.cssClass = 'jumbotron';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxJumbotronService = ngxJumbotronService;
      }
    ];

    this.ngAfterViewInit = function () {
      var _className, type;
      
      _className = this.cssClass;

      _type = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.TYPE);

      if(_type) {
        _className += ' ' + this.ngxJumbotronService.combineType(_type);
      }

      this.ngxRendererService.addToElementAttribute('class', _className, true);
    };

  }

})(window.ngxBootstrap);