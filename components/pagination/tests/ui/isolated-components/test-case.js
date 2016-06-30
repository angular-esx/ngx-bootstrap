var NGX_PAGINATION = require('components/pagination/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_PAGINATION.SERVICE, function (ngxPaginationService) {

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
    NGX_PAGINATION.DIRECTIVES
  ],
  providers: [
  NGX_CORE_SERVICES,
   NGX_PAGINATION.SERVICE
  ]
})
.Class(new _testCase());