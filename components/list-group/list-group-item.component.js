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
      COLOR: 'color',
      STATE: 'state'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxListGroupService,

      function (elementRef, ngxRendererService, ngxListGroupService) {
        this.cssClass = 'list-group-item';
        this.ngxRendererService = ngxRendererService;
        this.color = ngxRendererService
          .for(elementRef.nativeElement)
          .getElementAttribute(_ATTRIBUTES.COLOR)

        this.state = ngxRendererService
          .for(elementRef.nativeElement)
          .getElementAttribute(_ATTRIBUTES.STATE)

        this.ngxListGroupService = ngxListGroupService;
      }
    ];

    this.ngAfterViewInit = function () {
      var _className, color;
      
      _className = this.cssClass;

      if(this.color) {
        _className += ' ' + this.ngxListGroupService.combineColor(color);
      }

      if(this.state) {
        _className += ' ' + this.ngxListGroupService.getStateClass(this.state);
      }

      this.ngxRendererService.addToElementAttribute('class', _className, true);
    };
  }

})(window.ngxBootstrap);