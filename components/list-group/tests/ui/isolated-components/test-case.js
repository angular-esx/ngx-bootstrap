(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('list-group'),
    directives: [
      components.ngxListGroupItemComponent,
      components.ngxListGroupLinkComponent,
      components.ngxListGroupButtonComponent,
      components.ngxListGroupComponent,
    ],
    providers: [
      cores.ngxColorService,
      cores.ngxStateService,
      components.ngxListGroupService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = function () {
      this.googleUrl = 'http://google.com';
    };
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);