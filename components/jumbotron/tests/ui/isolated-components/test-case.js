import * as ngCore from '@angular/core';
import NGX_JUMBOTRON_DIRECTIVES from '../../../../jumbotron';

function _ngxTestCase() {
  this.constructor = function() {};
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/jumbotron/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_JUMBOTRON_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());