(function (ngxBootstrap) {
  ngxBootstrap.ngxCores.ngxItemService = ng.core.Class(new _ngxItemService());

  function _ngxItemService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxStateService,

      function (ngxStateService) {
        ngxBootstrap.shallowCopy(this, ngxStateService);

        this.setPrefix('');
      }
    ];
  }

})(window.ngxBootstrap);