(function (ngxBootstrap) {
  ngxBootstrap.ngxClass.ngxButtonGroupServiceClass = ngxButtonGroupService;
  ngxBootstrap.ngxComponents.ngxButtonGroupService = ng.core.Class(new ngxButtonGroupService());

  function ngxButtonGroupService() {
    this.constructor = [
      ngxBootstrap.ngxCores.ngxTypeService,
      ngxBootstrap.ngxCores.ngxSizeService,

      function (ngxTypeService, ngxSizeService) {
        ngxBootstrap.shallowCopy(this, ngxTypeService);
        ngxBootstrap.shallowCopy(this, ngxSizeService);

        this.setPrefix('btn-group');
      }
    ];

    this.getVerticalTypeClass = function () {
      return 'vertical';
    };
  }

})(window.ngxBootstrap);