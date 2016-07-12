﻿function _testCase() {
  this.constructor = [ngxBootstrap.pager.SERVICE, function (ngxPagerService) {

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
var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/pager/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.pager.DIRECTIVES
  ],
  providers: [
    ngxBootstrap.coreService,
    ngxBootstrap.pager.SERVICE
  ]
})
.Class(new _testCase());