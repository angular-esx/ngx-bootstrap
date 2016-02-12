(function (testCases, components, fileService) {
  testCases.overrideLabelColor = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('label', 'override-label-color'),
    directives: [
      components.ngxLabelComponent
    ]
  })
  .Class((function () {
    return {
      constructor: function () {
      }
    };
  })());
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);