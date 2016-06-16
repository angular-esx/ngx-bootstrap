var ngxPagerComponent = require('components/pager/pager.component.js');
var ngxPagerService = require('components/pager/services/pager.service.js');
var ngxCoreService = require('coreService');
var ngxLinkComponent = require('cores/components/link/link.component.js');
var ngxLinkService = require('cores/components/link/services/link.service.js');
var ngxBootstrap = require('ngxBootstrap');
ngxBootstrap = require('utils');

function _testCase() {
  this.constructor = [ngxPagerService, function (ngxPagerService) {

    this.TYPES = ngxPagerService.getTypes();
  }];

  this.setPage = function (event) {
    event.setPrevLink('https://mywebsite.com/page/' + event.currentPage - 1);
    event.setNextLink('https://mywebsite.com/page/' + event.currentPage + 1);
  };

  this.changePage = function (event) {
    event.cancel();

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
   ngxCoreService,
   ngxLinkService,
   ngxPagerService
  ]
})
.Class(new _testCase());