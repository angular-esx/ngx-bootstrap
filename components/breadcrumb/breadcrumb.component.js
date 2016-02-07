(function (ngxBootstrap, fileService) {
  ngxBootstrap.ngxComponents.ngxBreadcrumbComponent = ng.core.Directive({
    selector: '[ngx-breadcrumb]'
  })
  .Class(breadcrumb());

  function breadcrumb() {
    return {
      constructor: [ng.core.ElementRef, ng.core.Renderer, function (elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
      }],
      ngAfterViewInit: function() {
        this.renderer.setElementClass(this.elementRef, 'breadcrumb', true);
      }
    };
  }

})(window.ngxBootstrap, ngxBootstrap.configs.fileService);