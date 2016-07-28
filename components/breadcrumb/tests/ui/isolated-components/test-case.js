var ngCore = require('@angular/core/index.js');
var ngxLink = require('../../../../link/index.js');
var ngxBreadcrumb = require('../../../../breadcrumb/index.js');

function _testCase() {
  this.constructor = function () {
    this.categoryPage = 'http://my-website.com/category';
    this.productPage = 'http://my-website.com/product';
  };
}

module.exports = ngCore.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/breadcrumb/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxLink.LINK_DIRECTIVES,
    ngxBreadcrumb.BREADCRUMB_DIRECTIVES
  ]
})
.Class(new _testCase());