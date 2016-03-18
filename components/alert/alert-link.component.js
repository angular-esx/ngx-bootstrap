(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxAlertLinkClass = ngxAlertLink;

  ngxBootstrap.ngxComponents.ngxAlertLinkComponent = ng.core.Component({
    selector: 'ngx-alert-link',
    template: _getNgxAlertLinkTemplate(),
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new ngxAlertLink());

  function ngxAlertLink() {
    var _ATTRIBUTES = {
      HREF: 'href',
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,

      function (elementRef, ngxRendererService) {
        this.cssClass = 'alert-link';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef);
      }
    ];

    this.ngAfterContentInit = function () {
      this.href = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.HREF) || '#';
    };

    this.ngAfterViewInit = function () {
      this.ngxRendererService.removeElementAttribute(_ATTRIBUTES.HREF);
    };
  };

  function _getNgxAlertLinkTemplate() {
    return `
      <a href="{{href}}" class ="{{cssClass}}">
        <ng-content></ng-content>
      </a>
    `;
  };

})(window.ngxBootstrap);