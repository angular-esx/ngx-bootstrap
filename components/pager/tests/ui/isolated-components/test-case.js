import * as ngCore from '@angular/core';
import NGX_PAGER_DIRECTIVES from '../../../../pager';

function _ngxTestCase() {
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

export var _ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/pager/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_PAGER_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());