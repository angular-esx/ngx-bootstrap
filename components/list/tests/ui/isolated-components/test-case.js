import * as ngCore from '@angular/core';
import NGX_LLIST_DIRECTIVES from '../../../../list';

function _ngxTestCase() {
  this.constructor = function () {};

  this.click = function (event) {
    event.preventDefault();
    console.log('clicked');
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/list/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LLIST_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());