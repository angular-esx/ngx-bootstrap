﻿(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('button'),
    directives: [
      components.ngxButtonComponent
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
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);