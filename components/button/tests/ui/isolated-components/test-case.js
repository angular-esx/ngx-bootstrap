import * as ngCore from '@angular/core';
import { NGX_BUTTON_DIRECTIVES } from '../../../../button';

function _ngxTestCase() {
  this.constructor = function () {};

  this.click = function (event) {
    console.log('clicked');
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_BUTTON_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());