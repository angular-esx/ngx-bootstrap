var NGX_PAGER = require('components/pager/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [NGX_PAGER.SERVICE, function (ngxPagerService) {

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
    NGX_PAGER.DIRECTIVES
  ],
  providers: [
    NGX_CORE_SERVICES,
    NGX_PAGER.SERVICE
  ]
})
.Class(new _testCase());