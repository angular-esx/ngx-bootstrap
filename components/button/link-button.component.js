(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxLinkButtonComponent = ng.core.Component({
    selector: 'ngx-link-button',
    template: _getNgxLinkButtonTemplate(),
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new ngxLinkButton());

  function ngxLinkButton() {
    var _ATTRIBUTES = {
      HREF: 'href'
    };
    this.extends = ngxBootstrap.ngxComponents.ngxButtonComponent;

    this.constructor = ngxBootstrap.ngxComponents.ngxButtonComponent;

    this.ngAfterContentInit = function () {
      this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
      
      this.href = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.HREF);
      this.base.ngAfterContentInit.apply(this, arguments);
    };
  }

  function _getNgxLinkButtonTemplate() {
    return [
      '<a [href]="href" [class.disabled]="isDisabled" role="button">',
        '<ng-content></ng-content>',
      '</a>'
    ].join('');
  }

})(window.ngxBootstrap);