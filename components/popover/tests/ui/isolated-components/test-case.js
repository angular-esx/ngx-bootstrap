var ngCore = require('@angular/core/index.js');
var rx = require('rxjs/rx.js');
var ngxCore = require('../../../../../cores/index.js');
var ngxPopover = require('../../../../popover/index.js');

function _testCase() {
  this.constructor = [ngxPopover.popoverService, function (ngxPopoverService) {
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
      
      rx.Observable.zip
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

      rx.Observable.zip
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

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/popover/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxPopover.POPOVER_DIRECTIVES
  ],
  providers: [
    ngxCore.animationService,
    ngxPopover.POPOVER_PROVIDERS,
  ]
})
.Class(new _testCase());