var ngxTooltipDirective = require('./../../../tooltip.directive.js');
var ngxTooltipTemplateDirective = require('./../../../tooltip-template.directive.js');
var ngxTooltipService = require('./../../../services/tooltip.service.js');
var ngxAnimationService = require('./../../../../../cores/services/animation.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxPositionService = require('./../../../../../cores/services/position.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');

function _testCase() {
  this.constructor = [ngxTooltipService, function (ngxTooltipService) {
    this.STATES = ngxTooltipService.getStates();
    this.POSITIONS = ngxTooltipService.getPositions();

    this.delay = 1 * 1000;

    this.alert = function () {
      alert('You have just clicked me!!!');
    };
  }];
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/tooltip/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxTooltipDirective,
    ngxTooltipTemplateDirective,
    ngxLinkComponent
  ],
  providers: [
    ngxAnimationService,
    ngxStateService,
    ngxPositionService,
    ngxWindowService,
    ngxTooltipService,
    ngxLinkService
  ]
})
.Class(new _testCase());