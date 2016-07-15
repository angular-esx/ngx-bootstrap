(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('radio'),
    directives: [
      components.ngxRadioGroupComponent,
      components.ngxRadioComponent
    ],
    providers: [
      cores.ngxColorService,
      cores.ngxTypeService,
      cores.ngxSizeService,
      cores.ngxStateService,
      components.ngxButtonService,
      components.ngxButtonGroupService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxButtonService, function (ngxButtonService) {
      this.ngxCheckboxGroupTracker = { value: '' };
      this.ngxVerticalCheckboxGroupTracker = { value: '' };

      this.COLORS = ngxButtonService.getColors();
      this.TYPES = ngxButtonService.getTypes();
      this.SIZES = ngxButtonService.getSizes();
      this.STATES = ngxButtonService.getStates();
    }];
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);