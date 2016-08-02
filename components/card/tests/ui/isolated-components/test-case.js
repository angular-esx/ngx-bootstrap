import * as ngCore from '@angular/core';
import NGX_CARD_DIRECTIVES from '../../../../card';

function _ngxTestCase() {
  this.constructor = function () {};
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/card/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_CARD_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());