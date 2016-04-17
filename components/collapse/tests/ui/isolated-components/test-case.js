(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('collapse'),
    directives: [
      components.ngxCollapseComponent
    ],
    providers: [
    ]
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = function () {
      var self = this;
      setTimeout(function(){
        self.isCollapse = true;
        console.log('collapse');
      }, 2000)
    };

    this.collapse = function() {
      this.isCollapse = !this.isCollapse;
    }
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);