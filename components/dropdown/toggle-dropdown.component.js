(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxToggleDropdownComponent = ng.core.Directive({
    selector: '[ngx-toggle-dropdown]',
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['id: ngx-toggle-dropdown'],
    host: {
      '(click)': 'toggle()'
    }
  })
  .Class(new _ngxToggleDropdown());

  function _ngxToggleDropdown() {

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxDropdownService,

      function (elementRef, ngxRendererService, ngxDropdownService) {
        this.cssClass = 'dropdown-toggle';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxDropdownService = ngxDropdownService;
      }
    ];

    this.ngAfterViewInit = function () {
      this.ngxRendererService.addToElementAttribute('class', this.cssClass);
    };

    this.toggle = function () {
      this.ngxDropdownService.toggle(this.id);
    };

  }

})(window.ngxBootstrap);