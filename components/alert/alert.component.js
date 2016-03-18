(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxAlertClass = ngxAlert;

  ngxBootstrap.ngxComponents.ngxAlertComponent = ng.core.Component({
    selector: 'ngx-alert',
    template: _getNgxAlertTemplate(),
    providers: [ngxBootstrap.ngxCores.ngxRendererService],
    events: ['onDismissed']
  })
  .Class(new ngxAlert());

  function ngxAlert() {
    var _ATTRIBUTES = {
      ID: 'id',
      COLOR: 'color',
      TYPE: 'type',
      POSITION: 'position',
      STATE: 'state'
    };

    this.constructor = [
      ng.core.ElementRef,
      ngxBootstrap.ngxCores.ngxRendererService,
      ngxBootstrap.ngxComponents.ngxAlertService,

      function (elementRef, ngxRendererService, ngxAlertService) {
        this.elementRef = elementRef;
        this.ngxRendererService = ngxRendererService.for(elementRef);
        this.ngxAlertService = ngxAlertService;

        this.cssClass = 'alert';
        this.onDismissed = new ng.core.EventEmitter();
      }
    ];

    this.ngAfterContentInit = function () {
      this.id = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.ID);
      this.color = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.COLOR);
      this.type = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.TYPE);
      this.position = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.POSITION);
      this.state = this.ngxRendererService.getElementAttribute(_ATTRIBUTES.STATE);
      this.isDismissible = this.ngxAlertService.isDismissibleType(this.type);
      this.isFloatable = this.ngxAlertService.isFloatableType(this.type);
    };

    this.ngAfterViewInit = function () {
      var _className = this.cssClass + ' ' + this.ngxAlertService.combineColorWithType(this.color, this.type);
      if (this.isFloatable) {
        _className += ' ' + this.ngxAlertService.getPositionClass(this.position);
      }
      _className += this.ngxAlertService.isHiddenState(this.state) ? ' fade' : ' fade in';

      this.ngxRendererService
       .addToElementAttribute('role', 'alert')
       .addToElementAttribute('class', _className, true);

      var _self = this;
      this.ngxAlertService.subscribe(
        function (event) {
          if (!event || !event.id || _self.id == event.id) {
            var _actions = _self.ngxAlertService.getActions();

            if (event.type == _actions.SHOW_ALERT) {
              _self.show();
            }
            else if (event.type == _actions.DISMISS_ALERT) {
              _self.dismiss();
            }
          }
        },
        function (error) {
          console.error('ngxAlertService', error);
        });
    };

    this.show = function () {
      if (!this.isFloatable) {
        this.ngxRendererService.removeElementClass(this.ngxAlertService.getFloatTypeClass());
      }

      this.ngxRendererService.addToElementClass('in');
    };

    this.dismiss = function () {
      this.ngxRendererService.removeElementClass('in');

      if (!this.isFloatable) {
        this.ngxRendererService.addToElementClass(this.ngxAlertService.getFloatTypeClass());
      }

      this.onDismissed.next({
        target: { id: this.id }
      });
    };
  }

  function _getNgxAlertTemplate() {
    return `
        <button type="button" class ="close" aria-label="Close" *ngIf="isDismissible" (click) ="dismiss()">
            <span aria-hidden="true">&times; </span>
        </button>
        <ng-content></ng-content>
    `;
  }

})(window.ngxBootstrap);