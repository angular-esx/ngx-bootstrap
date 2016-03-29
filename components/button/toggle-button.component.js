(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxToggleButtonComponent = ng.core.Component({
    selector: 'ngx-toggle-button',
    template: _getNgxToggleButtonTemplate(),
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    events: ['onToggled']
  })
  .Class(new ngxToggleButton());

  function ngxToggleButton() {
    var _ATTRIBUTES = {
      ID: 'id'
    };

    this.extends = ngxBootstrap.ngxComponents.ngxButtonComponent;

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxButtonService,

      function (elementRef, ngxRendererService, ngxButtonService) {
        ngxBootstrap.ngxComponents.ngxButtonComponent.apply(this, arguments);

        this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));

        this.onToggled = new ng.core.EventEmitter();
      }
    ]; 

    this.ngAfterContentInit = function () {
      this.id = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.ID);
      this.isActive = this.ngxButtonService.isActiveState(this.state);

      this.base.ngAfterContentInit.apply(this, arguments);
    };

    this.toggle = function () {
      if (!this.isDisabled) {
        this.isActive = !this.isActive;

        this.onToggled.next({
          target: { id: this.id, active: this.isActive }
        });
      }
    };
  }

  function _getNgxToggleButtonTemplate() {
    return [
      '<button type="button" [class.active]="isActive" [disabled]="isDisabled" (click)="toggle()">',
        '<ng-content></ng-content>',
      '</button>'
    ].join('');
  }

})(window.ngxBootstrap);