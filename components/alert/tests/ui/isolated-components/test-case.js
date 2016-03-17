(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('alert'),
    directives: [
      components.ngxAlertComponent,
      components.ngxAlertLinkComponent
    ],
    providers: [
      cores.ngxColorService,
      cores.ngxTypeService,
      cores.ngxStateService,
      components.ngxAlertService
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [components.ngxAlertService, function (ngxAlertService) {
      this.ngxAlertService = ngxAlertService;

      this.COLORS = ngxAlertService.getColors();
      this.TYPES = ngxAlertService.getTypes();
      this.POSITIONS = ngxAlertService.getPositions();
      this.STATES = ngxAlertService.getStates();

      this.href = 'https://translate.google.com.vn';
    }];

    this.ngAfterViewInit = function () {
      var _self = this;
      setTimeout(function () {
        _self.ngxAlertService.show('myInfoAlert');
        _self.ngxAlertService.dismiss('mySuccessAlert');
      }, 2 * 1000);
    };

    this.dismissed = function (event) {
      console.log(event);
    };
  };
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);