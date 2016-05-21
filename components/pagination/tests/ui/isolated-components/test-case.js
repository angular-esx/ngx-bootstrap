var ngxPaginationComponent = require('./../../../' + __COMPONENT_FILE__);
var ngxPaginationService = require('./../../../services/pagination.service.js');
var ngxColorService = require('./../../../../../cores/services/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/type.service.js');
var ngxSizeService = require('./../../../../../cores/services/size.service.js');
var ngxStateService = require('./../../../../../cores/services/state.service.js');
var ngxWindowService = require('./../../../../../cores/services/window.service.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxPaginationService, function (ngxPaginationService) {

    this.SIZES = ngxPaginationService.getSizes();
  }];

  this.setLinkPage = function (event) {
    event.page.link = 'https://mywebsite.com/page/' + event.page.number;
  };

  this.changePage = function (event) {
    event.preventDefault();

    if (event.page.number % 2 === 0) {
      event.cancel();
      alert('Canceled changing page');
    }
  };
}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/pagination/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLinkComponent,
    ngxPaginationComponent
  ],
  providers: [
   ngxColorService,
   ngxTypeService,
   ngxSizeService,
   ngxStateService,
   ngxWindowService,
   ngxLinkService,
   ngxPaginationService
  ]
})
.Class(new _testCase());