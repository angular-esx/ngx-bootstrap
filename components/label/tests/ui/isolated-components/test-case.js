(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('label'),
    directives: [
      components.ngxLabelComponent
    ],
    providers: [
      cores.ngxColorService,
      cores.ngxTypeService,
      components.ngxLabelService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxLabelService, function (ngxLabelService) {
      this.COLORS = ngxLabelService.getColors();
      this.TYPES = ngxLabelService.getTypes();
    }];
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);