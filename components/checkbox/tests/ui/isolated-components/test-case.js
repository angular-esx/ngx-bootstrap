import * as ngCore from '@angular/core';
import NGX_GROUP_DIRECTIVES from '../../../../group';
import NGX_BUTTON_DIRECTIVES from '../../../../button';
import NGX_CHECKBOX_DIRECTIVES from '../../../../checkbox';

function _ngxTestCase() {
  this.constructor = function () {
    this.ngxCheckboxTracker = { value: '' };
    this.ngxCheckboxGroupTracker = [];
    this.ngxVerticalCheckboxGroupTracker = [];
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'directives/checkbox/tests/ui/isolated-directives/test-case.html',
  directives: [
    NGX_GROUP_DIRECTIVES,
    NGX_BUTTON_DIRECTIVES,
    NGX_CHECKBOX_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());