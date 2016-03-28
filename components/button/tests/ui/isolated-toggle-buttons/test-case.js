(function (testCases, cores, components, fileService) {
  testCases.isolatedToggleButtons = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('button', 'isolated-toggle-buttons'),
    directives: [
      components.ngxToggleButtonComponent
    ],
    providers: [
      cores.ngxColorService,
      cores.ngxTypeService,
      cores.ngxSizeService,
      cores.ngxStateService,
      components.ngxButtonService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxButtonService, function (ngxButtonService) {
      this.COLORS = ngxButtonService.getColors();
      this.TYPES = ngxButtonService.getTypes();
      this.SIZES = ngxButtonService.getSizes();
      this.STATES = ngxButtonService.getStates();
    }];

    this.onToggled = function (event) {
      console.log(event);
    };
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);