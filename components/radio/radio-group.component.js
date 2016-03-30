(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxRadioGroupComponent = ng.core.Component({
    selector: 'ngx-radio-group',
    template: '<div data-toggle="buttons"><ng-content></ng-content></div>',
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['model: model'],
    events: ['modelChange']
  })
  .Class(new _ngxRadioGroup());

  function _ngxRadioGroup() {
    this.extends = ngxBootstrap.ngxComponents.ngxButtonGroupComponent;

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxButtonGroupService,

      function (elementRef, ngxRendererService, ngxButtonGroupService) {
        this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
        ngxBootstrap.ngxComponents.ngxButtonGroupComponent.apply(this, arguments);

        this.modelChange = new ng.core.EventEmitter();
      }
    ];

    this.change = function (value) {
      this.model = value;
      this.modelChange.emit(value);
    };

  }

})(window.ngxBootstrap);