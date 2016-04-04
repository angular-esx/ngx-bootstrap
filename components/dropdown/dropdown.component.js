(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxDropdownComponent = ng.core.Component({
    selector: 'ngx-dropdown',
    template: '<ng-content></ng-content>',
    providers: [ngxBootstrap.ngxCores.ngxRendererService]
  })
  .Class(new _ngxDropdown());

  function _ngxDropdown() {
    var _ATTRIBUTES = {
      ID: 'id',
      TYPE: 'type'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxDropdownService,

      function (elementRef, ngxRendererService, ngxDropdownService) {
        this.cssClass = 'dropdown-menu';

        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef.nativeElement);
        this.ngxDropdownService = ngxDropdownService;
      }
    ];

    this.ngAfterContentInit = function () {
      this.id = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.ID);
      this.type = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.TYPE);

      this.isShown = false;
    };

    this.ngAfterViewInit = function () {
      var _cssClass = this.cssClass;

      if (this.type) {
        _cssClass += ' ' + this.ngxDropdownService.getTypeClass(this.type);
      }

      this.ngxRendererService.addToElementAttribute('class', _cssClass, true);

      var _self = this;
      this.ngxDropdownService.subscribe(
        function (event) {
          if (!event || !event.id || _self.id == event.id) {
            var _actions = _self.ngxDropdownService.getActions();

            if (event.type === _actions.TOGGLE_DROPDOWN) {
              _self.toggle();
            }
          }
        },
        function (error) {
          console.error('ngxDropdownService', error);
        });
    };

    this.toggle = function () {
      if (this.isShown) {
        this.ngxRendererService.removeElementClass('open');
        this.isShown = false;
      }
      else {
        this.ngxRendererService.addToElementClass('open');
        this.isShown = true;
      }
    };

  }

})(window.ngxBootstrap);