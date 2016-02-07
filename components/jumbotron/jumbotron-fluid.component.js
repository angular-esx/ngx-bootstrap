(function (ngxBootstrap, fileService) {
  ngxBootstrap.ngxComponents.ngxJumbotronFluidComponent = ng.core.Component({
    selector: 'ngx-jumbotron-fluid',
    templateUrl: fileService.getComponentTemplate('jumbotron', 'jumbotron-fluid.component.html')
  })
  .Class(jumbotronFluid());

  function jumbotronFluid() {
    return {
      constructor: function () {
      }
    };
  }

})(window.ngxBootstrap, ngxBootstrap.configs.fileService);