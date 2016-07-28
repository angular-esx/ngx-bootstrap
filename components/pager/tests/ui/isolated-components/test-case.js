var ngCore = require('@angular/core/index.js');
var ngxPager = require('../../../../pager/index.js');

function _testCase() {
  this.constructor = function () {};

  this.setPage = function (event) {
    event.setPrevLink('https://mywebsite.com/page/' + event.currentPage - 1);
    event.setNextLink('https://mywebsite.com/page/' + event.currentPage + 1);
  };

  this.changePage = function (event) {
    event.cancel();

    alert('Changed to page: ' + event.page.number);
  };

}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/pager/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxPager.PAGER_DIRECTIVES
  ]
})
.Class(new _testCase());