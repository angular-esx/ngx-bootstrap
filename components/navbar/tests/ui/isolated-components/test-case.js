import * as ngCore from '@angular/core';
import { NGX_LINK_DIRECTIVES } from '../../../../link';
import { NGX_NAVBAR_DIRECTIVES } from '../../../../navbar';

function _ngxTestCase() {
  this.constructor = function () {};
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
   NGX_LINK_DIRECTIVES,
   NGX_NAVBAR_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());