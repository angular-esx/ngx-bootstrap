(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('pager'),
    directives: [
      cores.ngxLinkComponent,
      components.ngxPagerComponent
    ],
    providers: [
      cores.ngxTypeService,
      cores.ngxStateService,
      cores.ngxLinkService,
      components.ngxPagerService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxPagerService, function (ngxPagerService) {

      this.TYPES = ngxPagerService.getTypes();
    }];

    this.onSetLinkPage = function (event) {
      event.setPrevLink('https://mywebsite.com/page/' + event.currentPage - 1);
      event.setNextLink('https://mywebsite.com/page/' + event.currentPage + 1);
    };

    this.onChangePage = function (event) {
      event.preventDefault();

      alert('Changed to page: ' + event.page.number);
    };

  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);