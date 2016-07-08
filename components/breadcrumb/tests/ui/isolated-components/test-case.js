var NGX_BREADCRUMB = require('components/breadcrumb/index.js');
var NGX_LINK = require('components/link/index.js');
var NGX_CORE_SERVICES = require('coreService');

function _testCase() {
  this.constructor = [
    NGX_BREADCRUMB.SERVICE,
  
    function (ngxBreadcrumbService) {
      this.COLORS = ngxBreadcrumbService.getColors();
      
      this.categoryPage = 'http://my-website.com/category';
      this.productPage = 'http://my-website.com/product';
    }
  ];
}


module.exports = ng.core.Component({
  selector: 'ngx-test-case',
  templateUrl: 'components/breadcrumb/tests/ui/isolated-components/test-case.html',
  directives: [
    NGX_LINK.DIRECTIVES,
    NGX_BREADCRUMB.DIRECTIVES
  ],
   providers: [
    NGX_CORE_SERVICES,
    NGX_LINK.SERVICE,
    NGX_BREADCRUMB.SERVICE
  ]
})
.Class(new _testCase());