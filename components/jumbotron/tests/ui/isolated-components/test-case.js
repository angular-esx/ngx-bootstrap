(function (testCases, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('jumbotron'),
    directives: [
      components.ngxJumbotronComponent,
      components.ngxJumbotronFluidComponent
    ]
  })
  .Class((function () {
    return {
      constructor: function () {

      }
    };
  })());
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);