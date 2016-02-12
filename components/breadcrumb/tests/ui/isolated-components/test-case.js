(function (testCases, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('breadcrumb'),
    directives: [
      components.ngxBreadcrumbComponent,
      components.ngxBreadcrumbItemComponent
    ]
  })
  .Class((function () {
    return {
      constructor: function () {

      }
    };
  })());
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);