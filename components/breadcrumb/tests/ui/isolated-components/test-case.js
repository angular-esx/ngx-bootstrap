import * as ngCore from '@angular/core';
import NGX_LINK_DIRECTIVES from '../../../../link';
import NGX_BREADCRUMB_DIRECTIVES from '../../../../breadcrumb';

function _ngxTestCase() {
  this.constructor = function () {
    this.categoryPage = 'http://my-website.com/category';
    this.productPage = 'http://my-website.com/product';
  };
}

export var ngxTestCase = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/breadcrumb/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LINK_DIRECTIVES,
    NGX_BREADCRUMB_DIRECTIVES
  ]
})
.Class(new _ngxTestCase());