(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxListGroupComponent = ng.core.Component({
    selector: 'ngx-list-group',
    template: '<ng-content></ng-content>',
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new _ngxListGroup());

  function _ngxListGroup() {
    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,

      function (elementRef, ngxRendererService) {
        this.cssClass = 'list-group';

        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
      }
    ];

    this.ngAfterViewInit = function () {
      this.ngxRendererService.addToElementAttribute('class', this.cssClass, true);
    };
  }

})(window.ngxBootstrap);