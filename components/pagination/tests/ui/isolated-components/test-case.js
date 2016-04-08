(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('pagination'),
    directives: [
      cores.ngxLinkComponent,
      components.ngxPaginationComponent
    ],
    providers: [
      cores.ngxSizeService,
      cores.ngxStateService,
      cores.ngxLinkService,
      components.ngxPaginationService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxPaginationService, function (ngxPaginationService) {

      this.SIZES = ngxPaginationService.getSizes();
    }];

    this.onSetLinkPage = function (event) {
      event.page.link = 'https://mywebsite.com/page/' + event.page.number;
    };

    this.onChangePage = function (event) {
      event.preventDefault();

      if (event.page.number % 2 === 0) {
        event.cancel();
        alert('Canceled changing page');
      }
    };

  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);