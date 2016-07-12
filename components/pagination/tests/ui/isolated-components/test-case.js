function _testCase() {
  this.constructor = [ngxBootstrap.pagination.SERVICE, function (ngxPaginationService) {

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

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/pagination/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.pagination.DIRECTIVES
  ],
  providers: [
   ngxBootstrap.coreService,
   ngxBootstrap.pagination.SERVICE
  ]
})
.Class(new _testCase());