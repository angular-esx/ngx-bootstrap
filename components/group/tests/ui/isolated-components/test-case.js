import * as ngCore from '@angular/core';
import NGX_BUTTON_DIRECTIVES from '../../../../button';
import NGX_GROUP_DIRECTIVES from '../../../../group';
import { NGX_DROPMENU_DIRECTIVES, NGX_DROPMENU_PROVIDERS } from '../../../../drop-menu';

function _ngxTestCase() {
  this.constructor = function () {};
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/group/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_BUTTON_DIRECTIVES,
    NGX_DROPMENU_DIRECTIVES,
    NGX_GROUP_DIRECTIVES
  ],
  providers: [
    NGX_DROPMENU_PROVIDERS
  ]
})
.Class(new _ngxTestCase());