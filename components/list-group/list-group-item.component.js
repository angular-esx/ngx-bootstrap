(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxListGroupItemComponent = ng.core.Component({
    selector: 'ngx-list-group-item',
    template: '<ng-content></ng-content>',
    directives: [
    ],
    providers: [
      ngxBootstrap.ngxCores.ngxRendererService
    ]
  })
  .Class(new _ngxListGroupItem());

  function _ngxListGroupItem() {
    var _ATTRIBUTES = {
      COLOR: 'color'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxListGroupService,

      function (elementRef, ngxRendererService, ngxListGroupService) {
        this.cssClass = 'list-group-item';

        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxListGroupService = ngxListGroupService;
      }
    ];

    this.ngAfterViewInit = function () {
      var _className, color;
      
      _className = this.cssClass;

      color = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.COLOR);

      if(color) {
        _className += ' ' + this.ngxListGroupService.combineColor(color);
      }

      this.ngxRendererService.addToElementAttribute('class', _className, true);
    };
  }

})(window.ngxBootstrap);