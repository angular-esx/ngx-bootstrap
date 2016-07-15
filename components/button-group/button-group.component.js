(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxButtonGroupClass = ngxButtonGroup;

  ngxBootstrap.ngxComponents.ngxButtonGroupComponent = ng.core.Component({
    selector: 'ngx-button-group',
    template: _getNgxButtonGroupTemplate(),
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new ngxButtonGroup());

  function ngxButtonGroup() {
    var _ATTRIBUTES = {
      TYPE: 'type',
      SIZE: 'size'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxButtonGroupService,

      function (elementRef, ngxRendererService, ngxButtonGroupService) {
        this.cssClass = 'btn-group';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxButtonGroupService = ngxButtonGroupService;
      }
    ];

    this.ngAfterContentInit = function () {
      this.type = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.TYPE);
      this.size = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.SIZE);
    };

    this.ngAfterViewInit = function () {
      var _className = this.cssClass;
      if (this.type) {
        _className += '-' + this.ngxButtonGroupService.getTypeClass(this.type);
      }
      if (this.size) {
        _className += ' ' + this.ngxButtonGroupService.getSizeClass(this.size);
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

  function _getNgxButtonGroupTemplate() {
    return [
      '<div role="group">',
        '<ng-content></ng-content>',
      '</div >'
    ].join('');
  }

})(window.ngxBootstrap);