(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxToggleDropupComponent = ng.core.Directive({
    selector: '[ngx-toggle-dropup]',
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['id: ngx-toggle-dropup'],
    host: {
      '(click)': 'toggle()'
    }
  })
  .Class(new _ngxToggleDropup());

  function _ngxToggleDropup() {
    this.extends = ngxBootstrap.ngxComponents.ngxToggleDropdownComponent;

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxDropdownService,

      function (elementRef, ngxRendererService, ngxDropdownService) {
        ngxBootstrap.ngxComponents.ngxToggleDropdownComponent.apply(this, arguments);

        this.cssClass += ' dropup';

        this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      }
    ];

    this.ngAfterViewInit = function () {
      this.ngxRendererService.addToElementAttribute('class', this.cssClass);
    };

  }

})(window.ngxBootstrap);