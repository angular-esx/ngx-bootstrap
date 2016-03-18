(function (testCases, ngxBootstrap, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('breadcrumb'),
    directives: [
      ngxBootstrap.ngxCores.ngxLinkComponent,
      ngxBootstrap.ngxCores.ngxItemComponent,
      ngxBootstrap.ngxComponents.ngxBreadcrumbComponent
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = function () {
      this.categoryPage = 'http://my-website.com/category';
      this.productPage = 'http://my-website.com/product';
    };
  }

})(window.testCases || (window.testCases = {}), window.ngxBootstrap, ngxBootstrap.configs.fileService);