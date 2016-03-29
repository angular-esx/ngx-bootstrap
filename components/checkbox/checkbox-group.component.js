(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxCheckboxGroupComponent = ng.core.Component({
    selector: 'ngx-checkbox-group',
    template: '<div data-toggle="buttons"><ng-content></ng-content></div>',
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['model: model'],
    events: ['modelChange']
  })
  .Class(new _ngxCheckboxGroup());

  function _ngxCheckboxGroup() {
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

    this.hasValue = function (value) {
      return this.model instanceof Array ? this.model.indexOf(value) !== -1 : this.model === value;
    };

    this.addOrRemoveValue = function (value) {
      if (this.hasValue(value)) {
        this.model.splice(this.model.indexOf(value), 1);
      }
      else {
        this.model.push(value);
      }

      this.modelChange.emit(this.model);
    };

  }

})(window.ngxBootstrap);