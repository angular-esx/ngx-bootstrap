(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxRadioComponent = ng.core.Component({
    selector: 'ngx-radio',
    template: _getNgxRadioTemplate(),
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['model: model', 'value: value'],
    events: ['modelChange']
  })
  .Class(new _ngxRadio());

  function _ngxRadio() {
    this.extends = ngxBootstrap.ngxComponents.ngxButtonComponent;

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxButtonService,
      [new ng.core.Optional(), ngxBootstrap.ngxComponents.ngxRadioGroupComponent],

      function (elementRef, ngxRendererService, ngxButtonService, ngxRadioGroup) {
        this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
        ngxBootstrap.ngxComponents.ngxButtonComponent.apply(this, arguments);

        this.ngxRadioGroup = ngxRadioGroup;

        this.modelChange = new ng.core.EventEmitter();
      }
    ];

    this.isChecked = function () {
      return this.ngxRadioGroup ? this.ngxRadioGroup.model === this.value : this.model === this.value;
    };

    this.check = function () {
      if (this.isDisabled) { return; }

      if (this.ngxRadioGroup) {
        this.ngxRadioGroup.change(this.value);
      }
      else {
        this.model = this.value;
        this.modelChange.emit(this.value);
      }
    };

  }

  function _getNgxRadioTemplate() {
    return [
      '<button type="button" [class.active]="isChecked()" [disabled]="isDisabled" (click)="check()">',
        '<ng-content></ng-content>',
      '</button>'
    ].join('');
  }

})(window.ngxBootstrap);