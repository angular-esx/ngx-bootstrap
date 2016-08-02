import * as ngCore from '@angular/core';
import NGX_HIDE_DIRECTIVES from '../../../../hide';

function _ngxTestCase() {
  this.constructor = function () {};
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/hide/tests/ui/isolated-directives/test-case.html',
  directives: [
    NGX_HIDE_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());