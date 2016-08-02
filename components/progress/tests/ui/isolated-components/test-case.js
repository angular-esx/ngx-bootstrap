import * as ngCore from '@angular/core';
import NGX_PROGRESS_DIRECTIVES from '../../../../progress';

function _ngxTestCase() {
  this.constructor = function () {
    this.progresses = {
      warning: { value: 75, max: 100 },
      danger: { value: 100, max: 100 }
    };
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/progress/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_PROGRESS_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());