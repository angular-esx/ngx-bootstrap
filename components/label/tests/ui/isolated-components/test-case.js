(function (testCases, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('label'),
    directives: [
      components.ngxLabelComponent,
      components.ngxLabelPrimaryComponent,
      components.ngxLabelInfoComponent,
      components.ngxLabelSuccessComponent,
      components.ngxLabelWarningComponent,
      components.ngxLabelDangerComponent,

      components.ngxLabelPillComponent,
      components.ngxLabelPillPrimaryComponent,
      components.ngxLabelPillInfoComponent,
      components.ngxLabelPillSuccessComponent,
      components.ngxLabelPillWarningComponent,
      components.ngxLabelPillDangerComponent
    ]
  })
  .Class((function () {
    return {
      constructor: function () {
      }
    };
  })());
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);