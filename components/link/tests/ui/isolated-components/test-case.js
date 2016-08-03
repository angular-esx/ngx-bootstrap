import * as ngCore from '@angular/core';
import { NGX_LINK_DIRECTIVES } from '../../../../link';

function _ngxTestCase() {
  this.constructor = function () {
    this.href = "http://www.google.com";
  };

  this.click = function (event) {
    console.log('clicked');
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_LINK_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());