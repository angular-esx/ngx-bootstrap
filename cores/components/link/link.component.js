(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxLinkClass = ngxLink;

  ngxBootstrap.ngxCores.ngxLinkComponent = ng.core.Component({
    selector: 'ngx-link',
    template: _getNgxLinkTemplate(),
    properties: ['itemLink: href', 'state'],
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new ngxLink());

  function ngxLink() {
    var _ATTRIBUTES = {
      HREF: 'href',
      STATE: 'state',
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxCores.ngxLinkService,

      function (elementRef, ngxRendererService, ngxLinkService) {
        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxLinkService = ngxLinkService;
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

    this.isDisabled = function () {
      return this.ngxLinkService.isDisabledState(this.state);
    };

    this.isActive = function () {
      return this.ngxLinkService.isActiveState(this.state);
    };

    this.click = function ($event) {
      if (this.isDisabled()) {
        $event.preventDefault();
      }
    };
  
  }

  function _getNgxLinkTemplate() {
    return [
      '<a [href]="itemLink" [class.active]="isActive()" [class.disabled]="isDisabled()" (click) ="click($event)">',
        '<ng-content></ng-content>',
      '</a>'
    ].join('');
  }

})(window.ngxBootstrap);