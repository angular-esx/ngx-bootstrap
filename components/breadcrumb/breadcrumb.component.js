(function (ngxBootstrap, fileService) {
  ngxBootstrap.ngxComponents.ngxBreadcrumbComponent = ng.core.Directive({
    selector: 'ngx-breadcrumb'
  })
  .Class(breadcrumb());

  function breadcrumb() {
    return {
      constructor: [ng.core.ElementRef, function (elementRef) {
        this.nativeElement = elementRef.nativeElement;
      }],
      ngAfterViewInit: function() {
        var items, item, i;

        items = this.nativeElement.getElementsByTagName('ngx-item');

        for(i = 0; item = items[i]; i++){
          if(item.hasAttribute('href')){
            item.innerHTML = '<a href="'+ item.getAttribute('href') +'">'+ item.innerHTML +'</a>';
          }
          if(item.hasAttribute('active')){
            ngxBootstrap.addClass(item, 'active');
          }
        }
      }
    };
  }

})(window.ngxBootstrap, ngxBootstrap.configs.fileService);