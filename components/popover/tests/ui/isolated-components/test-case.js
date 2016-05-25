var ngxPopoverDirective = require('./../../../popover.directive.js');
var ngxPopoverTemplateDirective = require('./../../../popover-template.directive.js');
var ngxPopoverService = require('./../../../services/popover.service.js');
var ngxAnimationService = require('./../../../../../cores/services/animation.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxPositionService = require('./../../../../../cores/services/position.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');

function _testCase() {
  this.constructor = [ngxPopoverService, function (ngxPopoverService) {
    this.ngxPopoverService = ngxPopoverService;

    this.STATES = ngxPopoverService.getStates();
    this.POSITIONS = ngxPopoverService.getPositions();

    this.delay = 1 * 1000;
  }];

  this.alert = function () {
    alert('You have just clicked me!!!');
    
    var _popoverId = 'myPopoverWithTemplate';

    this.ngxPopoverService.toggle(_popoverId);
  };

  this.togglePopover = function () {
    var _self = this,
        _popoverId = 'myPopover';
    
    if (this.toggled) {
      this.toggled = false;
      
      Rx.Observable.zip
      (
        this.ngxPopoverService.getToggle$(_popoverId),
        this.ngxPopoverService.getEnable$(_popoverId, false),
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
        this.ngxPopoverService.getEnable$(_popoverId, true),
        this.ngxPopoverService.getToggle$(_popoverId),
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
    ngxPopoverDirective,
    ngxPopoverTemplateDirective,
    ngxLinkComponent
  ],
  providers: [
    ngxAnimationService,
    ngxStateService,
    ngxPositionService,
    ngxWindowService,
    ngxPopoverService,
    ngxLinkService
  ]
})
.Class(new _testCase());