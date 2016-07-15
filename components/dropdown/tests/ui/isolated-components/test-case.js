(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('dropdown'),
    directives: [
      cores.ngxLinkComponent,
      cores.ngxItemComponent,
      cores.ngxHeaderComponent,
      cores.ngxDividerComponent,
      components.ngxDropdownComponent,
      components.ngxToggleDropdownComponent,
      components.ngxToggleDropupComponent
    ],
    providers: [
      cores.ngxStateService,
      cores.ngxTypeService,
      cores.ngxItemService,
      components.ngxDropdownService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxDropdownService, function (ngxDropdownService) {
      this.href = 'https://translate.google.com.vn';
    }];

    this.alert = function (id) {
      alert('You have just clicked ' + id);
    };
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);