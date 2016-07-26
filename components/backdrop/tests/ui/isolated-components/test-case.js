function _testCase() {
  this.constructor = [
    ng.core.ViewContainerRef,
    ngx.backdrop.backdropService,

    function (viewContainerRef, ngxBackdropService) {
      this.ngxBackdropService = ngxBackdropService;
      ngxBackdropService.setRootViewContainerRef(viewContainerRef);
    }
  ];

  this.ngOnInit = function () {
    var _self = this;

    this.subscription = this.ngxBackdropService.onClick(function (event) {
      if (event.isActive) {
        _self.ngxBackdropService.hide();
      }
    });
  };

  this.ngOnDestroy = function () {
    if (this.subscription) { this.subscription.unsubscribe(); }
  };

  this.onClick = function () {
    this.ngxBackdropService.show();
  };
}

var isolatedDirectives = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/backdrop/tests/ui/isolated-components/test-case.html',
  directives: [
    ngx.button.DIRECTIVES,
    ngx.backdrop.DIRECTIVES
  ],
  providers: [
    ngx.core.animationService,
    ngx.backdrop.PROVIDERS
  ]
})
.Class(new _testCase());