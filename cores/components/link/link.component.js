(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLinkClass = ngxLink;

  ngxBootstrap.ngxCores.ngxLinkComponent = ng.core.Component({
    selector: 'ngx-link',
    template: _getNgxLinkTemplate(),
    properties: ['itemLink: href'],
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new ngxLink());

  function ngxLink() {
    var _ATTRIBUTES = {
      HREF: 'href',
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,

      function (elementRef, ngxRendererService) {
        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef);
      }
    ];

    this.ngAfterContentInit = function () {
      if (!this.href) { this.href = '#'; }
    };

    this.ngAfterViewInit = function () {
      var _self = this;
      ngxBootstrap.forEach(_ATTRIBUTES, function (attribute) {
        _self.ngxRendererService.removeElementAttribute(attribute);
      });
    };

  }

  function _getNgxLinkTemplate() {
    return `
      <a href="{{itemLink}}">
        <ng-content></ng-content>
      </a>
    `;
  }

})(window.ngxBootstrap);