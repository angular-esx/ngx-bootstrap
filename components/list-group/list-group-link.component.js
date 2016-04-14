(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxListGroupLinkComponent = ng.core.Component({
    selector: 'ngx-list-group-link',
    properties: ['itemHref: href'],
    template: '<a href="{{itemHref}}"><ng-content></ng-content></a>',
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new _ngxListGroupLink());

  function _ngxListGroupLink() {
    var _ATTRIBUTES = {
      COLOR: 'color'
    };
    
    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxListGroupService,

      function (elementRef, ngxRendererService, ngxListGroupService) {
        this.cssClass = '';
        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService;
        this.ngxListGroupService = ngxListGroupService;
        this.color = ngxRendererService
          .for(this.elementRef.nativeElement)
          .getElementAttribute(_ATTRIBUTES.COLOR);
      }
    ];

    this.ngAfterViewInit = function () {
      var _className;
      
      _className = this.ngxListGroupService.combineColor(this.color);

      if(_className) {
        this.ngxRendererService
          .for(this.elementRef.nativeElement.firstChild)
          .addToElementAttribute('class', _className, true);
      }
    };
  }

})(window.ngxBootstrap);