var ngxAlertComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxAlertService = require('./../../../services/alert.service.js');
var ngxAlertLinkDirective = require('./../../../alert-link.directive.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');
var ngxItemComponent = require('./../../../../../cores/components/item/item.component.js');
var ngxItemService = require('./../../../../../cores/components/item/services/item.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxPositionService = require('./../../../../../cores/services/position.service.js');
var ngxAnimationService = require('./../../../../../cores/services/animation.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxAlertService, function (ngxAlertService) {
    this.ngxAlertService = ngxAlertService;

    this.COLORS = ngxAlertService.getColors();
    this.TYPES = ngxAlertService.getTypes();
    this.POSITIONS = ngxAlertService.getPositions();
    this.STATES = ngxAlertService.getStates();

    this.href = 'https://translate.google.com.vn';
  }];

  this.ngAfterViewInit = function () {
    var _self = this;
    setTimeout(function () {
      _self.ngxAlertService.show('myInfoAlert');
      _self.ngxAlertService.dismiss('mySuccessAlert');
    }, 2 * 1000);
  };

  this.dismiss = function (event) {
    console.log(event);
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/alert/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLinkComponent,
    ngxItemComponent,
    ngxAlertComponent,
    ngxAlertLinkDirective
  ],
  providers: [
    ngxColorService,
    ngxTypeService,
    ngxSizeService,
    ngxStateService,
    ngxPositionService,
    ngxAnimationService,
    ngxWindowService,
    ngxAlertService,
    ngxLinkService,
    ngxItemService
  ]
})
.Class(new _testCase());