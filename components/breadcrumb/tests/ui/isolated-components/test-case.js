function _testCase() {
  this.constructor = function () {
    this.categoryPage = 'http://my-website.com/category';
    this.productPage = 'http://my-website.com/product';
  };
}

var isolatedComponents = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/breadcrumb/tests/ui/isolated-components/test-case.html',
  directives: [
    ngxBootstrap.link.DIRECTIVES,
    ngxBootstrap.breadcrumb.DIRECTIVES
  ]
})
.Class(new _testCase());