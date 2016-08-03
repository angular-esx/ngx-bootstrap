import * as ngCore from '@angular/core';
import { NGX_GROUP_DIRECTIVES } from '../../../../group';
import { NGX_BUTTON_DIRECTIVES } from '../../../../button';
import { NGX_RADIO_DIRECTIVES } from '../../../../radio';

function _ngxTestCase() {
  this.constructor = function () {
    this.ngxRadioGroupTracker = { value: '' };
    this.ngxVerticalRadioGroupTracker = { value: '' };
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
  directives: [
    NGX_GROUP_DIRECTIVES,
    NGX_BUTTON_DIRECTIVES,
    NGX_RADIO_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());