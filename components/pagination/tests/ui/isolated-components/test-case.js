var ngxPaginationComponent = require('components/pagination/pagination.component.js');
var ngxPaginationService = require('components/pagination/services/pagination.service.js');
var ngxLinkComponent = require('cores/components/link/link.component.js');
var ngxLinkService = require('cores/components/link/services/link.service.js');
var ngxCoreService = require('coreService');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _testCase() {
  this.constructor = [ngxPaginationService, function (ngxPaginationService) {

    this.SIZES = ngxPaginationService.getSizes();
  }];

  this.setPage = function (event) {
    event.page.link = 'https://mywebsite.com/page/' + event.page.number;
  };

  this.changePage = function (event) {
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
   ngxLinkService,
   ngxPaginationService,
   ngxCoreService
  ]
})
.Class(new _testCase());