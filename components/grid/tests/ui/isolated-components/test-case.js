import * as ngCore from '@angular/core';
import NGX_GRID_DIRECTIVES from '../../../../grid';

function _ngxTestCase() {
  this.constructor = function () {
    this.items = [];

    var _sizes = ['xs-12', 'sm-6', 'md-4', 'lg-3', 'xl-2'].join(' ');
    for (var i = 0; i < 10; i++) {
      this.items.push({ name: 'Item ' + (i + 1), size: _sizes });
    }
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/grid/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_GRID_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());