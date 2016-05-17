var ngxPagerComponent = require('./../../../pager.component.js');
var ngxPagerService = require('./../../../services/pager.service.js');
var ngxColorService = require('./../../../../../cores/services/render/color.service.js');
var ngxTypeService = require('./../../../../../cores/services/render/type.service.js');
var ngxStateService = require('./../../../../../cores/services/render/state.service.js');
var ngxSizeService = require('./../../../../../cores/services/render/size.service.js');
var ngxLinkComponent = require('./../../../../../cores/components/link/link.component.js');
var ngxLinkService = require('./../../../../../cores/components/link/services/link.service.js');
var ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.js');
ngxBootstrap = require('./../../../../../cores/ngx-bootstrap.utils.js');

function _testCase() {
  this.constructor = [ngxPagerService, function (ngxPagerService) {

    this.TYPES = ngxPagerService.getTypes();
  }];

  this.setLinkPage = function (event) {
    event.setPrevLink('https://mywebsite.com/page/' + event.currentPage - 1);
    event.setNextLink('https://mywebsite.com/page/' + event.currentPage + 1);
  };

  this.changePage = function (event) {
    event.preventDefault();

    alert('Changed to page: ' + event.page.number);
  };

}

module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/pager/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLinkComponent,
    ngxPagerComponent
  ],
  providers: [
   ngxColorService,
   ngxTypeService,
   ngxStateService,
   ngxSizeService,
   ngxLinkService,
   ngxPagerService
  ]
})
.Class(new _testCase());