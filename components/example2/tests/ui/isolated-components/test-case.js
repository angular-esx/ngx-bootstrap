(function (testCases, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('example2'),
    directives: [
      components.ngxExampleCComponent
    ]
  })
  .Class((function () {
    return {
      constructor: function () {
      }
    };
  })());
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);