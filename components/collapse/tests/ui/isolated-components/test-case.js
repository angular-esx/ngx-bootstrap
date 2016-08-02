import * as ngCore from '@angular/core';
import ngxAnimationService from '../../../cores';
import NGX_BUTTON_DIRECTIVES from '../../../../button';
import { NGX_COLLAPSE_DIRECTIVES, NGX_COLLAPSE_PROVIDERS } from '../../../../collapse';

function _testCase() {
  this.constructor = function () {};
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/collapse/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_BUTTON_DIRECTIVES,
    NGX_COLLAPSE_DIRECTIVES
  ],
  providers: [
    ngxAnimationService,
    NGX_COLLAPSE_PROVIDERS
  ]
})
.Class(new _testCase());