(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('button-group'),
    directives: [
      components.ngxButtonGroupComponent
    ],
    providers: [
      cores.ngxColorService,
      cores.ngxTypeService,
      cores.ngxSizeService,
      cores.ngxStateService,
      components.ngxButtonGroupService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxButtonGroupService, function (ngxButtonGroupService) {
      this.TYPES = ngxButtonGroupService.getTypes();
      this.SIZES = ngxButtonGroupService.getSizes();
    }];
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);