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
      COLOR: 'color',
      STATE: 'state'
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
        this.state = ngxRendererService
          .for(this.elementRef.nativeElement)
          .getElementAttribute(_ATTRIBUTES.STATE);
      }
    ];

    this.ngAfterViewInit = function () {
      var _className = '';
      
      if(this.color){
        _className += this.ngxListGroupService.combineColor(this.color);
      }

      if (this.state) {
        _className += (_className ? ' ' : '') + this.ngxListGroupService.getStateClass(this.state);
      }

      if(_className) {
        this.ngxRendererService
          .for(this.elementRef.nativeElement.firstChild)
          .addToElementAttribute('class', _className, true);
      }
    };
  }

})(window.ngxBootstrap);