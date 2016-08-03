import * as ngCore from '@angular/core';
import { NGX_JUMBOTRON_DIRECTIVES } from '../../../../jumbotron';

function _ngxTestCase() {
  this.constructor = function() {};
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_JUMBOTRON_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());