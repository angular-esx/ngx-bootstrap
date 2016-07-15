(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxPaginationService = ng.core.Class(new _ngxPaginationService());

  function _ngxPaginationService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxSizeService,

      function (ngxSizeService) {
        ngxBootstrap.shallowCopy(this, ngxSizeService);

        this.setPrefix('pagination');
      }
    ];

  }

})(window.ngxBootstrap);