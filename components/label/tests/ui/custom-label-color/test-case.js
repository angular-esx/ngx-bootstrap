(function (testCases, ngxBootstrap, fileService) {
  testCases.customLabelColor = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('label', 'custom-label-color'),
    directives: [
      ngxBootstrap.ngxComponents.ngxLabelComponent
    ],
    providers: [
      ng.core.provide(ngxBootstrap.ngxComponents.ngxLabelService, { useClass: ng.core.Class(new customLabelService()) })
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = [ngxBootstrap.ngxComponents.ngxLabelService, function (ngxLabelService) {
      this.COLORS = ngxLabelService.getColors();
    }];
  };

  function customLabelService() {
    ngxBootstrap.shallowCopy(this, new ngxBootstrap.ngxClass.ngxLabelServiceClass(), true);

    this.getDefaultColorClass = function () {
      return 'custom-label-default';
    };
    this.getOrangeColorClass = function () {
      return 'custom-label-orange';
    };
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap, ngxBootstrap.configs.fileService);