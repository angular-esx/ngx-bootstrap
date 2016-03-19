(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('jumbotron'),
    directives: [
      components.ngxJumbotronComponent
    ],
    providers: [
      cores.ngxTypeService,
      components.ngxJumbotronService
    ]
  })
  .Class((function () {
    return {
      constructor: function () {

      }
    };
  })());
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);