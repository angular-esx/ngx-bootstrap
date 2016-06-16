var NGX_POPOVER = require('components/popover/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_POPOVER.SERVICE, function (ngxPopoverService) {
    this.ngxPopoverService = ngxPopoverService;

    this.STATES = ngxPopoverService.getStates();
    this.POSITIONS = ngxPopoverService.getPositions();

    this.delay = 1 * 1000;
  }];

  this.alert = function () {
    alert('You have just clicked me!!!');

    this.ngxPopoverService.toggle(this.popoverWithTemplateElement.nativeElement);
  };

  this.togglePopover = function () {
    var _self = this;
    
    if (this.toggled) {
      this.toggled = false;
      
      Rx.Observable.zip
      (
        this.ngxPopoverService.getToggle$(_self.popoverElement.nativeElement),
        this.ngxPopoverService.getEnable$(_self.popoverElement.nativeElement, false),
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
        this.ngxPopoverService.getEnable$(_self.popoverElement.nativeElement, true),
        this.ngxPopoverService.getToggle$(_self.popoverElement.nativeElement),
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

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/popover/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_POPOVER.DIRECTIVES
  ],
  providers: [
    NGX_POPOVER.SERVICE,
    NGX_CORE_SERVICES
  ],
  queries: {
    popoverElement: new ng.core.ViewChild('myPopover', { read: ng.core.ElementRef }),
    popoverWithTemplateElement: new ng.core.ViewChild('myPopoverWithTemplate', { read: ng.core.ElementRef })
  }
})
.Class(new _testCase());