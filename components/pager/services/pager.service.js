(function (ngxBootstrap) {
  ngxBootstrap.ngxComponents.ngxPagerService = ng.core.Class(new _ngxPagerService());

  function _ngxPagerService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxTypeService,

      function (ngxTypeService) {
        ngxBootstrap.shallowCopy(this, ngxTypeService);

        this.setPrefix('pager');
      }
    ];

    this.getAlignedTypeClass = function () {
      return 'aligned';
    };

  }

})(window.ngxBootstrap);