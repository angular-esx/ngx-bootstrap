import * as ngCore from '@angular/core';
import { NGX_LABEL_DIRECTIVES } from '../../../../label';

function _ngxTestCase() {
  this.constructor = function () {
    this.type = 'pill';
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_LABEL_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());