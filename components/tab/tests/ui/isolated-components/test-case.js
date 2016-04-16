(function (testCases, cores, components, fileService) {
  testCases.isolatedComponents = ng.core.Component({
    selector: 'ngx-test-case',
    templateUrl: fileService.getTestCaseTemplate('tab'),
    directives: [
      components.ngxTabComponent,
      components.ngxTabViewComponent
    ],
  })
  .Class(new testCase());

  function testCase() {
    this.constructor = function () {
      this.details = [];
      this.id = 0;
    }

    this.addDetail = function() {
      this.id++;
      this.details.push({
        title: `Detail ${this.id}`,
        text: `Some detail text for ${this.id}...`
      });
    },

    this.removeDetail = function(detail){
      this.details = this.details.filter(function(d){
        return d !== detail;
      })
    }

    this.show = function(event) {
      console.log('show:', event);
    }

    this.hide = function(event) {
      console.log('hide:', event)
    }
  }
})(window.testCases || (window.testCases = {}), window.ngxBootstrap.ngxCores, window.ngxBootstrap.ngxComponents, ngxBootstrap.configs.fileService);