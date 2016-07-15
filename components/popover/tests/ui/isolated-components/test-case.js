function _testCase() {
  this.constructor = [ngxBootstrap.popover.POPOVER_SERVICE, function (ngxPopoverService) {
    this.ngxPopoverService = ngxPopoverService;

    this.delay = 1 * 1000;
  }];

  this.alert = function () {
    alert('You have just clicked me!!!');

    this.ngxPopoverService.toggle('myPopoverWithTemplate');
  };

  this.togglePopover = function () {
    var _self = this;
    
    if (this.toggled) {
      this.toggled = false;
      
      Rx.Observable.zip
      (
        this.ngxPopoverService.getToggle$('myPopover'),
        this.ngxPopoverService.getEnable$('myPopover', false),
        function (toggleEvent, enableEvent) {
          return [toggleEvent, enableEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxPopoverService.next(event);
      });
    }
    else {
      this.toggled = true;

      Rx.Observable.zip
      (
        this.ngxPopoverService.getEnable$('myPopover', true),
        this.ngxPopoverService.getToggle$('myPopover'),
        function (enableEvent, toggleEvent) {
          return [enableEvent, toggleEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxPopoverService.next(event);
      });
    }
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/popover/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.popover.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService.ANIMATION_SERVICE,
    ngxBootstrap.popover.SERVICES,
  ]
})
.Class(new _testCase());