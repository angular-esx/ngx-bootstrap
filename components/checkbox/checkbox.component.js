(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxCheckboxComponent = ng.core.Component({
    selector: 'ngx-checkbox',
    template: _getNgxCheckboxTemplate(),
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    properties: ['model: model', 'checkedValue: checked-value', 'unCheckedValue: unchecked-value'],
    events: ['modelChange']
  })
  .Class(new _ngxCheckbox());

  function _ngxCheckbox() {
    this.extends = ngxBootstrap.ngxComponents.ngxButtonComponent;

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxButtonService,
      [new ng.core.Optional(), ngxBootstrap.ngxComponents.ngxCheckboxGroupComponent],

      function (elementRef, ngxRendererService, ngxButtonService, ngxCheckboxGroup) {
        this.base = Object.getPrototypeOf(Object.getPrototypeOf(this));
        ngxBootstrap.ngxComponents.ngxButtonComponent.apply(this, arguments);

        this.ngxCheckboxGroup = ngxCheckboxGroup;

        this.modelChange = new ng.core.EventEmitter();
      }
    ];

    this.hasValue = function () {
      return this.model instanceof Array ? this.model.indexOf(this.checkedValue) !== -1 : this.model === this.checkedValue;
    };

    this.addOrRemoveValue = function () {
      if (this.model instanceof Array) {
        if (this.hasValue()) {
          this.model.splice(this.model.indexOf(this.checkedValue), 1);
        }
        else {
          this.model.push(this.checkedValue);
        }
      }
      else {
        if (this.model === this.checkedValue) {
          this.model = this.unCheckedValue;
        }
        else {
          this.model = this.checkedValue;
        }
      }

      this.modelChange.emit(this.model);
    };

    this.isChecked = function () {
      return this.ngxCheckboxGroup ? this.ngxCheckboxGroup.hasValue(this.checkedValue) : this.hasValue();
    };

    this.check = function () {
      if (this.isDisabled) { return; }

      if (this.ngxCheckboxGroup) {
        this.ngxCheckboxGroup.addOrRemoveValue(this.checkedValue);
      }
      else {
        this.addOrRemoveValue();
      }
    };

  }

  function _getNgxCheckboxTemplate() {
    return [
      '<button type="button" [class.active]="isChecked()" [disabled]="isDisabled" (click)="check()">',
        '<ng-content></ng-content>',
      '</button>'
    ].join('');
  }

})(window.ngxBootstrap);