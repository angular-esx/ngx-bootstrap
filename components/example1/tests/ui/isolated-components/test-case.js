(function (testCases, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('example1'),
    directives: [
      components.ngxExampleAComponent,
      components.ngxExampleBComponent,
    ],
    providers: [components.ngxExampleAService]
  })
  .Class((function () {
    return {
      constructor: function () {
      }
    };
  })());
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);