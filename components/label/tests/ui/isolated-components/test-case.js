(function (testCases, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('label'),
    directives: [
      components.ngxLabelComponent,
      components.ngxLabelPillComponent
    ],
    providers: [components.ngxLabelService]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxLabelService, function (ngxLabelService) {
      this.COLORS = ngxLabelService.getColors();
    }];
  };
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);