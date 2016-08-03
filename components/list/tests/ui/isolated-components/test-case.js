import * as ngCore from '@angular/core';
import { NGX_LIST_DIRECTIVES } from '../../../../list';

function _ngxTestCase() {
  this.constructor = function () {};

  this.click = function (event) {
    event.preventDefault();
    console.log('clicked');
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_LIST_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());