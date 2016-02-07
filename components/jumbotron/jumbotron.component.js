(function (ngxBootstrap, fileService) {
  ngxBootstrap.ngxComponents.ngxJumbotronComponent = ng.core.Component({
    selector: 'ngx-jumbotron',
    templateUrl: fileService.getComponentTemplate('jumbotron')
  })
  .Class(jumbotron());

  function jumbotron() {
    return {
      constructor: function(){
      }
    };
  }

})(window.ngxBootstrap, ngxBootstrap.configs.fileService);