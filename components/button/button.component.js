(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxButtonClass = ngxButton;

  ngxBootstrap.ngxComponents.ngxButtonComponent = ng.core.Component({
    selector: 'ngx-button',
    template: _getNgxButtonTemplate(),
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new ngxButton());

  function ngxButton() {
    var _ATTRIBUTES = {
      COLOR: 'color',
      TYPE: 'type',
      SIZE: 'size',
      STATE: 'state'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxButtonService,

      function (elementRef, ngxRendererService, ngxButtonService) {
        this.cssClass = 'btn';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxButtonService = ngxButtonService;
      }
    ];

    this.ngAfterContentInit = function () {
      this.color = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.COLOR);
      this.type = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.TYPE);
      this.size = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.SIZE);
      this.state = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.STATE);

      this.isDisabled = this.ngxButtonService.isDisabledState(this.state);
    };

    this.ngAfterViewInit = function () {
      var _className = this.cssClass + ' ' + this.ngxButtonService.combineColorWithType(this.color, this.type);
      if (this.size) {
        _className += ' ' + this.ngxButtonService.getSizeClass(this.size);
      }
      if (this.state) {
        _className += ' ' + this.ngxButtonService.getStateClass(this.state);
      }

      var _self = this;
      ngxBootstrap.forEach(_ATTRIBUTES, function (attribute) {
        _self.ngxRendererService.removeElementAttribute(attribute);
      });
      this.ngxRendererService.removeElementAttribute('class');
      
      this.ngxRendererService.for(this.elementRef.nativeElement.firstChild);
      this.ngxRendererService.addToElementAttribute('class', _className, true);

      this.ngxRendererService.for(this.elementRef.nativeElement);
    };

  }

  function _getNgxButtonTemplate() {
    return [
      '<button type="button" [disabled]="isDisabled">',
        '<ng-content></ng-content>',
      '</button>'
    ].join('');
  }

})(window.ngxBootstrap);