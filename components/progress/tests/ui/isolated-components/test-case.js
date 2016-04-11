(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('progress'),
    directives: [
      components.ngxProgressComponent
    ],
    providers: [
      cores.ngxColorService,
      cores.ngxTypeService,
      components.ngxProgressService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxProgressService, function (ngxProgressService) {
      this.COLORS = ngxProgressService.getColors();
      this.TYPES = ngxProgressService.getTypes();
    }];
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);