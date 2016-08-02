import * as ngCore from '@angular/core';
import NGX_PAGINATION_DIRECTIVES from '../../../../pagination';

function _ngxTestCase() {
  this.constructor = function () {};

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

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/pagination/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_PAGINATION_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());